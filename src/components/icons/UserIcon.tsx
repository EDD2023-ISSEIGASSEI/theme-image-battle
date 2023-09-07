import { css } from "@emotion/react";
import { colors } from "~/styles/themes/colors";

type UserIconProps = {
  imageUrl?: string;
};

export const UserIcon = ({ imageUrl }: UserIconProps) => {
  return (
    <span css={icon}>
      {imageUrl ? (
        <img src={imageUrl} alt="アイコンの画像" />
      ) : (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.9997 25C29.6038 25 33.333 21.2709 33.333 16.6667C33.333 12.0625 29.6038 8.33337 24.9997 8.33337C20.3955 8.33337 16.6663 12.0625 16.6663 16.6667C16.6663 21.2709 20.3955 25 24.9997 25ZM24.9997 29.1667C19.4372 29.1667 8.33301 31.9584 8.33301 37.5V41.6667H41.6663V37.5C41.6663 31.9584 30.5622 29.1667 24.9997 29.1667Z"
            fill={colors.black.lighten[1]}
          />
        </svg>
      )}
    </span>
  );
};

const icon = css`
  width: 68px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  background: ${colors.primary};
  box-shadow: 2px 2px 4px #af9e43, -2px -2px 4px #ffff73;
  overflow: hidden;
`;
