# CSC 519 : Deploy Milestone


### Team
| Name     |      Unity ID     |  Contribution |
|----------|:-----------------:|----------------:|
| Kushagra Mishra |  kmishra | nomad,  redis, documentation    |
| Webb Chawla |    vchawla3   |   canary , checkbox, proxy, documentation |
| Bhavya Bansal | bbansal | jenkins, ssh setup, droplet setup, documentation    |
| Ananthram Eklaspuram | aeklasp| iTrust, rolling update, documentation   |


## File Structure

+-- CanaryRelease  
+--+-- checkBoxCanary   
+--+-- checkBoxStable    
+--+-- inventory  
+--+-- loadbalancer  
+--+-- node_modules     
+--+-- ansibleSetupOnJenkins.yml   
+--+-- install_jenkins.yml   
+--+-- main.yml  
+--+-- setupSSHJenkins.yml   
+-- Deployment   
+--+-- deploy_iTrust/tasks    
+--+-- haproxy  
+--+-- mysql  
+--+-- python/tasks     
+--+-- aws_ec2.yml   
+--+-- deploy_iTrust.yml   
+--+-- iTrust.xml  
+--+-- iTrustVars.yml  
+--+-- install_jenkins.yml  
+--+-- inventory.ini     
+-- README.md   


## Screencasts

Checkbox Production Deployment/Canary Release/Proxy/Alerts [SCREENCAST HERE](https://youtu.be/LeLG2DdaVX4) & [IMPLEMENTATION DETAILS HERE](https://github.ncsu.edu/kmishra/CM3/blob/master/CanaryRelease/README.md)

Nomad & Redis [ScreenCast](https://youtu.be/yNJcn4j7Z9E)


iTrust Deployment and Rolling Update [ScreenCast](https://youtu.be/R8VpypU8uqE)
