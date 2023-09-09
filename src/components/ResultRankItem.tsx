import { css } from "@emotion/react";
import { colors } from "~/styles/themes/colors";

type ResultRankItemProps = {
  rank: number;
  name: string;
  point: number;
};

export const ResultRankItem = ({ rank, name, point }: ResultRankItemProps) => {
  return (
    <p css={result}>
      {rank}位 {name}：{point}pt
    </p>
  );
};

const result = css`
  width: 580px;
  padding: 12px 20px 12px 120px;
  border-radius: 20px;
  text-align: left;
  font-size: 2.8rem;
  box-shadow: 4px 4px 8px #af9e43, -4px -4px 8px #ffff73;
  color: ${colors.black.lighten[1]};
  background: ${colors.primary};
`;
