import { css } from "@emotion/react";
import { colors } from "../../styles/themes/colors";
import { Card } from "../Card";
import { Button } from "../Button";

// Cardコンポーネントを使ったワンタイムパスワード認証フォームカードコンポーネント

export const ExplanationOTPCard = () => {
  return (
    <Card css={cardContainer}>
      <p css={title}>LINE ワンタイムパスワード登録のお願い</p>
      <img src="/images/explainOTP.png" alt="ワンタイムパスワードの画像" css={explainImg}/>
      <div css={buttonSection}>
        <Button css={button}>戻る</Button>
        <Button css={button}>認証</Button>
      </div>
    </Card>
  );
}

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

const explainImg = css`
  width: 80%;
  margin-bottom: 40px;
`;


const buttonSection = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

const button = css` 
  font-size: 1.5rem;
  padding: 10px 20px;
  margin-bottom: 0;
`;
