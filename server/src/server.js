import { connectAmqp } from "./connections/amqpConnection.js";
import { createWsServer } from './connections/wsConnection.js';
import { createExpressServer } from './connections/restConnection.js';

const server = createExpressServer();
createWsServer(server, '/eoloplants')
await connectAmqp();
let port = process.env.SERVER_PORT | 3000;
server.listen(port, () => console.log(`Server listening on port ${port}!`));
