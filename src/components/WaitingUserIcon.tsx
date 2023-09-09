import { OwnerTag } from "./tags/OwnerTag";
import { UserIcon } from "./icons/UserIcon";
import { css } from "@emotion/react";

type WaitingUserIconProps = {
  isOwner: boolean;
  imageUrl?: string;
  name: string;
  id: string;
};

export const WaitingUserIcon = ({
  isOwner,
  imageUrl,
  name,
  id
}: WaitingUserIconProps) => {
  return (
    <div css={wrapper}>
      {isOwner && <OwnerTag css={tag} />}
      <UserIcon imageUrl={imageUrl} css={icon} />
      <p css={nameStyle}>{name}</p>
      <p>{id}</p>
    </div>
  );
};

const wrapper = css`
  align-items: center;
  height: 160px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  text-align: center;
`;

const tag = css`
  margin-bottom: 12px;
`;

const icon = css`
  margin-bottom: 12px;
`;

const nameStyle = css`
  font-size: 1.2rem;
`;
