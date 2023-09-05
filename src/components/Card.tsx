import { css } from "@emotion/react";
import { ReactNode } from "react";
import { colors } from "../styles/themes/colors";

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <div css={card}>{children}</div>;
};

const card = css`
  font-size: 2rem;
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 116px;
  border-radius: 20px;
  background: ${colors.primary};
  box-shadow: 8px 8px 16px #af9e43, -8px -8px 16px #ffff73;
`;
