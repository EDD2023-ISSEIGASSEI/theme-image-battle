import { css } from "@emotion/react";
import { ComponentPropsWithRef } from "react";
import { colors } from "~/styles/themes/colors";

interface SelectFieldProps extends ComponentPropsWithRef<"select"> {
  optionList: {
    value: number;
    label: string;
  }[];
  placeholder: string;
}

export const SelectField = ({
  optionList,
  placeholder,
  ...props
}: SelectFieldProps) => {
  return (
    <select css={select} required {...props}>
      <option value={""} hidden>
        {placeholder}
      </option>
      {optionList.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
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
  background: #ecd55b;
  cursor: pointer;

  &:invalid {
    color: ${colors.black.lighten[2]};
  }

  & > option {
    color: ${colors.black.lighten[1]};
  }

  & > option:first-of-type {
    color: ${colors.black.lighten[2]};
  }
  &:hover {
    box-shadow: inset 2px 2px 3px #d4c052, inset -2px -2px 3px #ffea64;
  }
`;
