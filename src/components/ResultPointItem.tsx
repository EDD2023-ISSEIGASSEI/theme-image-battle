import { css } from "@emotion/react";
import { colors } from "~/styles/themes/colors";

type ResultPointItemProps = {
  name: string;
  point: number;
  replyTheme: string;
};

export const ResultPointItem = ({
  name,
  point,
  replyTheme
}: ResultPointItemProps) => {
  return (
    <p css={result}>
      <p css={pointStyle}>
        {name}：{point}pt
      </p>
      <p css={theme}>{replyTheme}</p>
    </p>
  );
};

const result = css`
  display: flex;
  flex-direction: column;
  width: 540px;
  padding: 16px 32px;
  border-radius: 20px;
  text-align: left;
  font-size: 2.8rem;
  box-shadow: 4px 4px 8px #af9e43, -4px -4px 8px #ffff73;
  color: ${colors.black.lighten[1]};
  background: ${colors.primary};
`;

const pointStyle = css`
  align-self: flex-start;
`;

const theme = css`
  align-self: center;
`;
