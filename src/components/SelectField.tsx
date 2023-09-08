import { css } from "@emotion/react";
import { colors } from "~/styles/themes/colors";

type SelectFieldProps = {
  optionList: string[];
  placeholder: string;
};

export const SelectField = ({ optionList, placeholder }: SelectFieldProps) => {
  return (
    <select css={select}>
      <option defaultValue={placeholder} hidden>
        {placeholder}
      </option>
      {optionList.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

const select = css`
  width: 100%;
  font-size: 2rem;
  padding: 8px 12px;
  border-radius: 8px;
  background: #ecd55b;
  box-shadow: inset 5px 5px 5px #d4c052, inset -5px -5px 5px #ffea64;
  transition: 0.3s;
  color: ${colors.black.lighten[1]};
  background: #ecd55b;
  cursor: pointer;

  &:hover {
    box-shadow: inset 2px 2px 3px #d4c052, inset -2px -2px 3px #ffea64;
  }
`;
