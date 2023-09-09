// /searchRoomページで使用する型
export type Room = {
  id: string;
  maxPlayerNum: number;
  name: string;
  ownerPlayerId: string;
  password: string;
  playerNum: number;
};
