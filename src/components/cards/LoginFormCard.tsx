import { css } from "@emotion/react";
import { colors } from "../../styles/themes/colors";
import { Card } from "../Card";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { useState } from "react";

export const LoginFormCard = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onClick = async () => {
    await fetch("/api/auth/signIn", {
      method: "POST",
      body: JSON.stringify({
        id,
        password
      })
    });

    console.log(typeof id);
    console.log(typeof password);
  };

  return (
    <Card css={cardContainer}>
      <p css={title}>ログイン</p>
      <div css={inputSection}>
        <TextInput
          value={id}
          onChange={(event) => setId(event.target.value)}
          placeholder="ID"
        />
        <TextInput
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
        />
        <Button onClick={onClick} css={button}>
          Login
        </Button>
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
  font-size: 2.3rem;
  margin-bottom: 25px;
  color: ${colors.black.lighten[1]};
`;

const cardContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

const inputSection = css`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin-bottom: 20px;
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
