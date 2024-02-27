import { registration } from '../actions/registration';
import { MemoryDB } from '../db';
import { parserReq } from '../services/parser';
import { EnumWSMessage } from '../types/constants';
import { WebSocketID } from '../types/entity';

export const DB = new MemoryDB();

export function wsServer(ws: WebSocketID) {
  ws.on('error', (err) => {
    console.log(err);
  });
  ws.on('message', (request) => {
    const { type, data } = parserReq(request);
    switch (type) {
      case EnumWSMessage.Registration:
        registration(ws, data);
        break;
    }
  });
}
