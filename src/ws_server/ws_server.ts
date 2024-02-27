import * as ws from 'ws';
import { wsServer } from './serverStart';

const WSS_PORT = 3000;

class WebsocketServer {
  private port: number;
  private server: ws.Server;

  constructor(port: number) {
    const { Server } = ws;
    this.port = port;
    this.server = new Server({ port: this.port });
    this.server.on('connection', wsServer);
  }

  getWSServer() {
    return this.server;
  }

  getPort() {
    return this.port;
  }

  broadcast(message: string) {
    this.server.clients.forEach((client) => {
      client.send(message);
    });
  }
}

export const wss = new WebsocketServer(WSS_PORT);
