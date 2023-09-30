import { css } from "@emotion/react";
import { CheckTag } from "./tags/CheckTag";
import { ParentTag } from "./tags/ParentTag";
import { colors } from "~/styles/themes/colors";
import { PlayerState } from "~/types";

export type UserStatusProps = {
  id: string;
  name: string;
  score: number;
  isAction: boolean;
  isDealer: boolean;
};

export const UserStatePropsFromPlayerState = (
  playerStates: PlayerState,
  dealerId: string
) => {
  return {
    id: playerStates.player.id,
    name: playerStates.player.name,
    score: playerStates.score,
    isAction: playerStates.isCompleted,
    isDealer: playerStates.player.id === dealerId
  };
};

export const UserStatus = ({
  id,
  name,
  score,
  isAction,
  isDealer
}: UserStatusProps) => {
  console.log("id: ", id);

  return (
    <div css={user}>
      <div>
        <p>{name}</p>
        <p>{score}pt</p>
      </div>
      {isDealer ? (
        <ParentTag />
      ) : isAction ? (
        <CheckTag isChecked={isAction} />
      ) : (
        <CheckTag isChecked={isAction} />
      )}
    </div>
  );
};

const user = css`
  padding: 16px 34px;
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 2rem;
  border-radius: 38px;
  background: ${colors.primary};
  box-shadow: 8px 8px 16px #af9e43, -8px -8px 16px #ffff73;
`;
