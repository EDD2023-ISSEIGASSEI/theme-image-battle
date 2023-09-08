import { css } from "@emotion/react";
import { colors } from "../../styles/themes/colors";
import { Card } from "../Card";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import { Divider } from "../Divider";

// Cardコンポーネントを使ったログインフォームカードコンポーネント


export const LoginFormCard = () => {
  return (
    <Card css={cardContainer}>
      <p css={title}>ログイン</p>
      <div css={inputSection}>
        <TextInput placeholder="mail address" />
        <TextInput placeholder="password" />
        <Button css={button}>Login</Button>
      </div>
      <Divider direction="horizontal" />
      <div css={signupSection}>
        <p css={title}>はじめてご利用の方</p>
        <Button color="secondary">Sign up</Button>
      </div>
    </Card>
  );
};



const title = css`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: ${colors.black.lighten[1]};
`;

const cardContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const inputSection = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin-bottom: 30px;
  }
`;

const button = css`
  padding: 10px 20px;
`;

const signupSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

`;
