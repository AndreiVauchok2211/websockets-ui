import { RawData } from 'ws';
import { Message } from 'src/types/data';

export function parserReq(req: RawData) {
  const { type, data, id } = JSON.parse(req.toString()) as Message;
  if (data) {
    const result = JSON.parse(data.toString());
    return { type, data: result, id };
  }
  return { type, data: '', id };
}
