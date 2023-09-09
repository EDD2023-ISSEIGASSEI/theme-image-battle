import { OwnerTag } from "./tags/OwnerTag";
import { UserIcon } from "./icons/UserIcon";
import { css } from "@emotion/react";
import { ComponentPropsWithRef } from "react";

export interface WaitingUserIconProps extends ComponentPropsWithRef<"div"> {
  isOwner: boolean;
  imageUrl?: string;
  name: string;
  id: string;
}

export const WaitingUserIcon = ({
  isOwner,
  imageUrl,
  name,
  id,
  ...props
}: WaitingUserIconProps) => {
  return (
    <div css={wrapper} {...props}>
      {isOwner && <OwnerTag css={tag} />}
      <UserIcon imageUrl={imageUrl} css={icon} />
      <p css={nameStyle}>{name}</p>
      <p>{id}</p>
    </div>
  );
};

const wrapper = css`
  align-items: center;
  width: 100px;
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
