import { css } from "@emotion/react";
import { CheckIcon } from "../icons/CheckIcon";
import { colors } from "~/styles/themes/colors";

type CheckTagProps = {
  isChecked?: boolean;
};

export const CheckTag = ({ isChecked }: CheckTagProps) => {
  const tag = css`
    width: 38px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: ${isChecked ? colors.green : colors.primary};
    box-shadow: ${isChecked
      ? "2px 2px 4px #af9e43, -2px -2px 4px #ffff73;"
      : "inset 2px 2px 4px #af9e43, inset -2px -2px 4px #ffff73;"};
  `;

  return (
    <span css={tag}>
      <CheckIcon />
    </span>
  );
};
