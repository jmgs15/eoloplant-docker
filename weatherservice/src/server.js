const grpc = require('grpc');
const WeatherService = require('./interface');
const weatherServiceImpl = require('./weatherService');

const server = new grpc.Server();

server.addService(WeatherService.service, weatherServiceImpl);
const host =  process.env.GRPC_HOST + ':9090';
server.bind(host, grpc.ServerCredentials.createInsecure());

console.log('gRPC server running at ' + host);

server.start();