export enum EnumWSMessage {
  Registration = 'reg',
  UpdateWinners = 'update_winners',
  CreateRoom = 'create_room',
  AddToRoom = 'add_user_to_room',
  CreateGame = 'create_game',
  UpdateRoom = 'update_room',
  AddShips = 'add_ships',
  StartGame = 'start_game',
  Attack = 'attack',
  RandomAttack = 'randomAttack',
  Turn = 'turn',
  Finish = 'finish',
}

export enum EnumShipsType {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  Huge = 'huge',
}

export enum EnumAttackStatus {
  Miss = 'miss',
  Killed = 'killed',
  Shot = 'shot',
}
