import { css } from "@emotion/react";
import { colors } from "~/styles/themes/colors";

export const ParentTag = () => {
  return <span css={tag}>親</span>;
};

const tag = css`
  width: 38px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  border-radius: 8px;
  box-shadow: 2px 2px 4px #af9e43, -2px -2px 4px #ffff73;
  color: ${colors.black.lighten[1]};
  background: ${colors.red};
`;
