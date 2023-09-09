export type User = {
  iconImageUrl: string;
  id: string;
  lineUid: string;
  name: string;
  password: string;
};

export type Room = {
  id: string;
  maxPlayerNum: number;
  name: string;
  ownerPlayerId: string;
  password: string;
  playerNum: number;
};
