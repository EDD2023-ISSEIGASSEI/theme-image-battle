import { css } from "@emotion/react";
import { colors } from "../styles/themes/colors";
import { ComponentPropsWithRef } from "react";

interface TextInputProps extends ComponentPropsWithRef<"input"> {
  placeholder: string;
}

export const TextInput = ({ placeholder, ...props }: TextInputProps) => {
  return <input type="text" placeholder={placeholder} css={input} {...props} />;
};

const input = css`
  width: 100%;
  background: #ecd55b;
  font-size: 2rem;
  padding: 8px 12px;
  border-radius: 8px;
  background: #ecd55b;
  box-shadow: inset 5px 5px 5px #d4c052, inset -5px -5px 5px #ffea64;
  transition: 0.3s;
  color: ${colors.black.lighten[1]};

  &:hover {
    box-shadow: inset 2px 2px 3px #d4c052, inset -2px -2px 3px #ffea64;
  }

  &::placeholder {
    color: ${colors.black.lighten[2]};
    font-size: 1em;
  }
`;
