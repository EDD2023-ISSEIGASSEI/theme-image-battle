import { css } from "@emotion/react";
import { ChangeEvent } from "react";
import { colors } from "~/styles/themes/colors";

type UploadFileInputProps = {
  setIconImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
};

export const UploadFileInput = ({ setIconImageUrl }: UploadFileInputProps) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setIconImageUrl(reader.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <label css={label}>
      設定する
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        css={input}
      />
    </label>
  );
};

const label = css`
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 1.6rem;
  color: ${colors.black.lighten[1]};
  font-weight: 600;
  background: ${colors.primary};
  box-shadow: 8px 8px 16px #af9e43, -8px -8px 16px #ffff73;
  transition: 0.3s;

  &:hover {
    box-shadow: 4px 4px 8px #af9e43, -4px -4px 8px #ffff73;
  }
`;

const input = css`
  display: none;
`;
