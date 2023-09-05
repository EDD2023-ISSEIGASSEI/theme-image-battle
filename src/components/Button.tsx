import { SerializedStyles, css } from "@emotion/react";
import { ComponentPropsWithRef, ReactNode } from "react";
import { colors } from "../styles/themes/colors";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  color?: "primary" | "secondary";
  children: ReactNode;
}

type ColorTheme = {
  primary: SerializedStyles;
  secondary: SerializedStyles;
};

const colorTheme: ColorTheme = {
  primary: css`
    background: ${colors.secondary};
    color: ${colors.white};
  `,
  secondary: css`
    color: ${colors.black.lighten[1]};
    background: ${colors.primary};
  `
};

export const Button = ({
  color = "primary",
  children,
  ...props
}: ButtonProps) => {
  const common = css`
    padding: 10px 14px;
    font-size: 1.6rem;
    border-radius: 8px;
    font-weight: 600;
    box-shadow: 8px 8px 16px #af9e43, -8px -8px 16px #ffff73;
    transition: 0.3s;

    &:hover {
      box-shadow: 4px 4px 8px #af9e43, -4px -4px 8px #ffff73;
    }
  `;

  const button = css`
    ${common};
    ${colorTheme[color]};
  `;

  return (
    <button css={button} {...props}>
      {children}
    </button>
  );
};
