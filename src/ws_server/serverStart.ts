import { registration } from 'src/actions/registration';
import { MemoryDB } from 'src/db';
import { parserReq } from 'src/services/parser';
import { EnumWSMessage } from 'src/types/constants';
import { WebSocketID } from 'src/types/entity';

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
