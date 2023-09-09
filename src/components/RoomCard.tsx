import { css } from "@emotion/react";
import { Card } from "./Card";

type RoomCardProps = {
  name: string;
  id: string;
  currentPeople: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

export const RoomCard = ({ name, id, currentPeople }: RoomCardProps) => {
  const card = css`
    font-size: 1.5rem;
    text-align: center;
    ${currentPeople !== 7 &&
    "cursor: pointer;&:hover {box-shadow: 4px 4px 8px #af9e43, -4px -4px 8px #ffff73;};transition:0.3s;"};
    ${currentPeople === 7 &&
    "box-shadow: inset 8px 8px 16px #af9e43,inset -8px -8px 16px #ffff73"};
  `;

  const onClick = () => {
    if (currentPeople !== 7) {
      console.log("currentPeople");
    }
  };

  return (
    <Card css={card} onClick={onClick}>
      <p>{name}</p>
      <p>ルームID：{id}</p>
      <p>{currentPeople}/7</p>
    </Card>
  );
};
