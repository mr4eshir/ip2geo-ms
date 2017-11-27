# ip2geo-ms
Test exercise:  
Micro-service for translating IP address to geo location.  
(TODO: add full task description)  

# Post-Mortem
The app is meant to be executed as docker container, as it's main function is caching through memcached.  
After ```docker-compose up``` app is available by http://localhost/  
App is both available to use with local and remote database.  

New decoders are meant to add with decoders/abstract.js extension.  
Local databases should use Promise (realised in ```_wrap``` in abstract).  
Remote databases could be used with axios.js.  

Memcached is hardcoded to keep cache for 30 minutes by task description.  
404 error is task description (best use-case is no city and country were found by decoder).  
No IP validation, thought it is relatively easy to achieve with regexp.  
JSON format was described in task, ip and cached fields were added for clarification.  
No stack were described for the task, choosed Node as good option for microservice prototype.  
Memcached package for cache is a fast, but not clear option, enough for the task, though.  

Total time for completion is <12 hours (common issues: home distractions, got rusty with Node).  
No production stage neither configuration were made for the task.  
Solution wasn't tested on clean install, but should work without any preconfiguration.  

Any issues, advices and critics is welcomed.  
