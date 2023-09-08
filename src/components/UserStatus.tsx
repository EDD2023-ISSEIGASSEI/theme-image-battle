import { css } from "@emotion/react";
import { CheckTag } from "./tags/CheckTag";
import { ParentTag } from "./tags/ParentTag";
import { colors } from "~/styles/themes/colors";

export type UserStatus = {
  id: string;
  name: string;
  score: number;
  isAction: boolean;
  role: "親" | "子";
};

export const UserStatus = ({ id, name, score, isAction, role }: UserStatus) => {
  console.log("id: ", id);

  return (
    <div css={user}>
      <div>
        <p>{name}</p>
        <p>{score}pt</p>
      </div>
      {role === "親" ? (
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
