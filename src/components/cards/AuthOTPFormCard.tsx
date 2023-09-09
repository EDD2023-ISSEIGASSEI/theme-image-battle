import { css } from "@emotion/react";
import { colors } from "../../styles/themes/colors";
import { Card } from "../Card";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import { Dispatch } from "react";

// Cardコンポーネントを使ったワンタイムパスワード認証フォームカードコンポーネント

type AuthOTPFormCardProps = {
  otp: string;
  setOtp: Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
};

export const AuthOTPFormCard = ({
  otp,
  setOtp,
  onClick
}: AuthOTPFormCardProps) => {
  return (
    <Card css={cardContainer}>
      <p css={title}>LINE ワンタイムパスワード入力</p>
      <p css={description}>
        LINEに送信されたワンタイムパスワードを入力してください。
      </p>
      <TextInput
        value={otp}
        onChange={(event) => setOtp(event.target.value)}
        placeholder="one-time password"
        css={textInput}
      />
      <div css={buttonSection}>
        <Button css={button}>戻る</Button>
        <Button css={button} onClick={onClick}>
          認証
        </Button>
      </div>
    </Card>
  );
};

const cardContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const title = css`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: ${colors.black.lighten[1]};
`;

const description = css`
  font-size: 2rem;
  margin-bottom: 40px;
  color: ${colors.black.lighten[1]};
`;

const textInput = css`
  width: 100%;
  margin-bottom: 70px;
`;

// 両端そろえ
const buttonSection = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

const button = css`
  padding: 10px 20px;
  margin-bottom: 0;
`;
