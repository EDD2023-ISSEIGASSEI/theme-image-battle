import { css } from "@emotion/react";
import { colors } from "../../styles/themes/colors";
import { Card } from "../Card";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import { SelectField } from "../SelectField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Cardコンポーネントを使ったルーム作成フォームカードコンポーネント
export const CreateRoomFormCard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [selectedValue, setSelectedValue] = useState("");

  // select要素の変更ハンドラー
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // 選択された値をstateに設定
    setSelectedValue(event.target.value);
  };

  const onClick = async () => {
    const res = await fetch("/api/room", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        password: password,
        maxMember: Number(selectedValue)
      })
    });

    const json = await res.json();

    navigate(`/waitingRoom/${json.id}`);
  };

  return (
    <Card css={cardContainer}>
      <p css={title}>部屋を作成してください</p>
      <TextInput
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="ルーム名"
      />
      <TextInput
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="パスワード"
      />
      <SelectField
        onChange={handleSelectChange}
        optionList={maxUserList}
        placeholder={"最大人数を選択してください。"}
      />
      <Button css={button} onClick={onClick}>
        作成
      </Button>
    </Card>
  );
};

const maxUserList = [
  { value: 3, label: "3人" },
  { value: 4, label: "4人" },
  { value: 5, label: "5人" },
  { value: 6, label: "6人" },
  { value: 7, label: "7人" },
  { value: 8, label: "8人" }
];

const title = css`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: ${colors.black.lighten[1]};
`;

const cardContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin-bottom: 30px;
  }
`;

const button = css`
  padding: 10px 20px;
  margin-bottom: 0;
`;
