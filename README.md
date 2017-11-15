# CSC 519 : Deploy Milestone


### Team
| Name     |      Unity ID     |  Contribution |
|----------|:-----------------:|----------------:|
| Kushagra Mishra |  kmishra | nomad,  redis    |
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

Checkbox Production Deployment/Canary Release/Proxy/Alerts [HERE](https://youtu.be/LeLG2DdaVX4)



 
