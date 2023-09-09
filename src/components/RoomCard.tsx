import { css } from "@emotion/react";
import { Card } from "./Card";
import { Room } from "~/types";

export type RoomCardProps = {
  room: Room;
};

export const RoomCard = ({ room }: RoomCardProps) => {
  const card = css`
    font-size: 1.5rem;
    text-align: center;
    ${room.playerNum !== 7 &&
    "cursor: pointer;&:hover {box-shadow: 4px 4px 8px #af9e43, -4px -4px 8px #ffff73;};transition:0.3s;"};
    ${room.playerNum === 7 &&
    "box-shadow: inset 8px 8px 16px #af9e43,inset -8px -8px 16px #ffff73"};
  `;

  const onClick = () => {
    if (room.playerNum !== 7) {
      console.log("roomData: ", room);
    }
  };

  return (
    <Card css={card} onClick={onClick}>
      <p>{room.name}</p>
      <p>ルームID：{room.id}</p>
      <p>
        {room.playerNum}/{room.maxPlayerNum}
      </p>
    </Card>
  );
};
