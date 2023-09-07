import { SerializedStyles, css } from "@emotion/react";
import { colors } from "../styles/themes/colors";

// verticalを指定する場合は、親要素のheightも指定してください
type DividerProps = {
  direction: "vertical" | "horizontal";
};

type DirectionTheme = {
  vertical: SerializedStyles;
  horizontal: SerializedStyles;
};

const directionTheme: DirectionTheme = {
  vertical: css`
    width: 6px;
    height: 110%;
  `,
  horizontal: css`
    width: 100%;
    min-height: 6px;
  `
};

export const Divider = ({ direction, ...props }: DividerProps) => {
  const common = css`
    border-radius: 3px;
    background: ${colors.primary};
    box-shadow: inset 2px 2px 3px #7f7331, inset -2px -2px 3px #ffff85;
  `;

  const divider = css`
    ${common};
    ${directionTheme[direction]};
  `;

  return <div css={divider} {...props} />;
};
