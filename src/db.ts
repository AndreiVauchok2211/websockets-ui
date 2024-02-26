import { randomUUID } from 'crypto';
import { Player } from './types/entity';
import { RegDataRequest } from './types/data';

export class MemoryDB {
  players: Player[] = [];

  addPlayerDB(player: RegDataRequest) {
    const playerDB = { wins: 0, ...player, id: randomUUID() };
    this.players.push(playerDB);
    return playerDB;
  }

  getPlayers() {
    return this.players;
  }

  getPlayerByID(id: string) {
    return this.players.find((player) => player.id === id);
  }
}
