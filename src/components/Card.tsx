import { css } from "@emotion/react";
import { ComponentPropsWithRef, ReactNode } from "react";
import { colors } from "../styles/themes/colors";

interface CardProps extends ComponentPropsWithRef<"div"> {
  children: ReactNode;
}

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <div css={card} {...props}>
      {children}
    </div>
  );
};

const card = css`
  font-size: 2rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 80px;
  border-radius: 20px;
  background: ${colors.primary};
  box-shadow: 8px 8px 16px #af9e43, -8px -8px 16px #ffff73;
`;
