import { css } from "@emotion/react";
import { Header } from "../../components/Header";
import { colors } from "~/styles/themes/colors";
import { User } from "~/types";
import { useLoaderData, useNavigate } from "react-router-dom";
import { TextInput } from "~/components/TextInput";
import { Card } from "~/components/Card";
import { Button } from "~/components/Button";
import { useState } from "react";

export const RoomPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const user = useLoaderData() as User | null;

  const onClick = () => {
    (async () => {
      const res = await fetch("/api/room/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          //ルームID
          id,
          password
        })
      });

      if (res.status === 200) {
        const json = await res.json();
        console.log("join?", json);
        navigate(`/waitingRoom/${json.id}`);
      }
    })();
  };

  return (
    <div css={pageContainer}>
      <Header user={user?.id ? user : null} />
      <div css={cardContainer}>
        <Card css={cardContainer}>
          <p css={title}>ルームのIDとパスワード入力</p>
          <TextInput
            value={id}
            onChange={(event) => setId(event.target.value)}
            placeholder="id"
            css={textInput}
          />
          <TextInput
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="password"
            css={textInput}
          />
          <div css={buttonSection}>
            <Button css={button}>戻る</Button>
            <Button css={button} onClick={onClick}>
              認証
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

const pageContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${colors.primary};
`;

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

const textInput = css`
  width: 100%;
  margin-bottom: 32px;
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
