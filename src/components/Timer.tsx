import { css } from "@emotion/react";
import { colors } from "~/styles/themes/colors";

type Timer = {
  time: number;
};

export const Timer = ({ time }: Timer) => {
  return <span css={timer}>{time}秒</span>;
};

const timer = css`
  padding: 8px 24px;
  border-radius: 26px;
  font-size: 2.4rem;
  color: ${colors.black.lighten[1]};
  box-shadow: 8px 8px 16px #af9e43, -8px -8px 16px #ffff73;
`;
