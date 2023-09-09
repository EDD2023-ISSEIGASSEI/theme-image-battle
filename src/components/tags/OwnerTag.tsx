import { css } from "@emotion/react";
import { colors } from "~/styles/themes/colors";

export const OwnerTag = ({ ...props }) => {
  return (
    <span css={tag} {...props}>
      オーナー
    </span>
  );
};

const tag = css`
  width: 80px;
  height: 28px;
  padding: 0 8px;
  border-radius: 8px;
  text-align: center;
  font-size: 1.4rem;
  line-height: 28px;
  box-shadow: 2px 2px 4px #af9e43, -2px -2px 4px #ffff73;
  color: ${colors.black.lighten[1]};
  background: ${colors.red};
`;
