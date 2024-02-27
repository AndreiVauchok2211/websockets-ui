import WebSocket from 'ws';

export type Player = {
  id: string;
  name: string;
  password: string;
  wins: number;
};

export type WebSocketID = WebSocket & { playerId: string; gameId: string };
