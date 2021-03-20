const { spawnSync } = require('child_process');
const dockerHubUser = 'andreajuanmaurjc';
function build(serviceName, command) {
  console.log(`Building docker image for [${serviceName}]`);
  console.log(`Command: ${command}`);

  spawnSync(command, [], {
    shell: true,
    stdio: 'inherit'
  });
}

function upload(image) {
  let command = `docker push ${image}`
  console.log(`Command: ${command}`);
  spawnSync(command, [], {
    shell: true,
    stdio: 'inherit'
  });
}


build('weatherservice', `pack build ${dockerHubUser}/weatherservice:v1 --path . --builder gcr.io/buildpacks/builder:v1`);
build('toposervice', `mvn compile jib:build -Dimage=${dockerHubUser}/toposervice`);
build('server', `docker build -t ${dockerHubUser}/server .`);
build('planner', `docker build -t ${dockerHubUser}/planner .`);

upload(`${dockerHubUser}/weatherservice:v1`);
upload(`${dockerHubUser}/toposervice`);
upload(`${dockerHubUser}/server`);
upload(`${dockerHubUser}/planner`);