import { httpServer } from './http_server/http_server';

import { wss } from './ws_server/ws_server';

const HTTP_PORT = 8181;

httpServer.listen(HTTP_PORT);
console.log(`Start static http server on the ${HTTP_PORT} port!`);
console.log(`Start static Websocket server on the ${wss.getPort()} port!`);
