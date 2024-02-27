import { EnumWSMessage } from '../types/constants';
import { DB } from '../ws_server/serverStart';
import { RegDataRequest } from '../types/data';
import { WebSocketID } from '../types/entity';

export function registration(ws: WebSocketID, player: RegDataRequest) {
  const playerDB = DB.addPlayerDB(player);
  const res = {
    type: EnumWSMessage.Registration,
    data: JSON.stringify({
      name: playerDB.name,
      index: playerDB.id,
      error: false,
      errorText: '',
    }),
  };
  ws.playerId = playerDB.id;
  ws.send(JSON.stringify(res));
}
