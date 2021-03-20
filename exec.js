const { spawn } = require('child_process');
const dockerHubUser = 'andreajuanmaurjc';
 function build(serviceName, command){
 
   console.log(`Stated service [${serviceName}]`);
 
   let cmd = spawn(command, [], { cwd: serviceName, shell: true });
   
   cmd.stdout.on('data', function(data){
     process.stdout.write(`[${serviceName}] ${data}`);
   });
 
   cmd.stderr.on('data', function(data){
     process.stderr.write(`[${serviceName}] ${data}`);
   });
 }
 
 function upload(image){
   let command = `docker push ${image}`
  let cmd = spawn(command, [], { shell: true });
  cmd.stdout.on('data', function(data){
    process.stdout.write(`[${serviceName}] ${data}`);
  });

  cmd.stderr.on('data', function(data){
    process.stderr.write(`[${serviceName}] ${data}`);
  });
 }

 
 build('weatherservice', `pack build ${dockerHubUser}/weatherservice:v1 --path . --builder gcr.io/buildpacks/builder:v1`);
 build('toposervice', `mvn compile jib:build -Dimage=${dockerHubUser}/toposervice`);
 build('server',`docker build -t ${dockerHubUser}/server .`);
 build('planner',`docker build -t ${dockerHubUser}/planner .`);

 upload(`${dockerHubUser}/weatherservice:v1`);
 upload(`${dockerHubUser}/toposervice`);
 upload(`${dockerHubUser}/server`);
 upload(`${dockerHubUser}/planner`);