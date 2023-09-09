import { css } from "@emotion/react";
import { colors } from "../../styles/themes/colors";
import { Card } from "../Card";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { UserIcon } from "../icons/UserIcon";
import { UploadFileInput } from "../UploadFileInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignupFormCard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onClick = async () => {
    await fetch("/api/auth/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        name: name,
        password: password,
        iconImageUrl: imageUrl
      })
    });
    navigate("/auth/otp");
  };

  return (
    <Card css={cardContainer}>
      <p css={title}>Sign up</p>
      <div css={inputSection}>
        <TextInput
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="user name"
        />
        <TextInput
          placeholder="ID"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <TextInput
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p css={setTitle}>アイコンを設定しますか？</p>
        <p css={description}>
          アイコンを設定しない場合は、デフォルトのアイコンが設定されます。
        </p>
        <UserIcon imageUrl={imageUrl ? imageUrl : ""} />

        <div css={selection}>
          <UploadFileInput setImageUrl={setImageUrl} />
          <Button onClick={onClick} color="primary">
            Sign up
          </Button>
        </div>
      </div>
      <Divider direction="horizontal" />
      <div css={signupSection}>
        <p css={title}>すでにご登録の方</p>
        <Button color="secondary">Login</Button>
      </div>
    </Card>
  );
};

const title = css`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: ${colors.black.lighten[1]};
`;

const setTitle = css`
  font-size: 2.5rem;
  margin-bottom: 20px;
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

const description = css`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: ${colors.black.lighten[1]};
`;

const selection = css`
  display: flex;
  gap: 64px;
`;

const signupSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
