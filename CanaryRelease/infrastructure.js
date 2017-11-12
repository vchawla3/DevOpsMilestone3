var http      = require('http');
var httpProxy = require('http-proxy');
var exec = require('child_process').exec;
var request = require("request");
var Random = require('random-js');
var heartbeats = require('heartbeats');

var heart = heartbeats.createHeart(1000);

var STABLE = 'http://162.243.166.229';
var CANARY  = 'http://67.205.183.41';

// var GREEN = 'www.google.com';
// var BLUE  = 'www.cnn.com';

var TARGET = STABLE;

var rand = 
{
    random : new Random(Random.engines.mt19937().seed(0)),
    
    seed: function (kernel)
    {
        rand.random = new Random(Random.engines.mt19937().seed(kernel));
    }
};

rand.seed(0);

var infrastructure =
{
  setup: function()
  {
    // Proxy.
    var options = {};
    var proxy   = httpProxy.createProxyServer(options);

    var server  = http.createServer(function(req, res)
    {

      //40% of the time, route traffic to CANARY, otherwise route to STABLE
      if(rand.random.bool(0.4)){
        console.log('40%')
        TARGET = CANARY;
      } else {
        TARGET = STABLE;
        console.log('60%')
      }

      proxy.web( req, res, {target: TARGET } );
    });
    server.listen(8080);


    //Will use this to check for toobusy ALERT
    //every 30 beats aka every 30 seconds
    heart.createEvent(5, function(count, last){
      var options = 
      {
       url: CANARY,
      };
      request(options, function (error, res, body) {
          console.log('STATUS of CANARY: ' + res.statusCode);
          console.log('Current: ' + TARGET);
          if (res.statusCode == 503)
          {
            // if (TARGET == GREEN){ 
            //   console.log('switch to blue');
            //   TARGET = BLUE
            // }
            // else {
            //   console.log('switch to green');
            //   TARGET = GREEN
            // }
            console.log('toobusy hit');
          }
          
      });

      // console.log('...Every 30 Beats forever');
    });
  },

  teardown: function()
  {
    exec('forever stopall', function()
    {
      console.log("infrastructure shutdown");
      process.exit();
    });
  },
}

infrastructure.setup();

// Make sure to clean up.
process.on('exit', function(){infrastructure.teardown();} );
process.on('SIGINT', function(){infrastructure.teardown();} );
process.on('uncaughtException', function(err){
  console.error(err);
  infrastructure.teardown();} );