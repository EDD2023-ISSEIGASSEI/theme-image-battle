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

export type Player = {
  id: string;
  name: string;
  iconImageUrl: string;
};

export type WaitRoom = {
  phase: string;
  state: {
    roomInfo: {
      id: string;
      name: string;
      password: string;
      playerNum: number;
      maxPlayerNum: number;
      ownerPlayerId: string;
    };
    players: Player[];
  };
};
