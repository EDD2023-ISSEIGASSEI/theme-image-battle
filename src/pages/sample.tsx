import { css } from "@emotion/react";
import { colors } from "../styles/themes/colors";
import { Card } from "../components/Card";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { Divider } from "../components/Divider";
import { USER_STATUS_LIST } from "../data";
import { CheckTag } from "~/components/tags/CheckTag";
import { ParentTag } from "~/components/tags/ParentTag";
import { UserIcon } from "~/components/icons/UserIcon";
import { OwnerTag } from "~/components/tags/OwnerTag";
import { SelectField } from "~/components/SelectField";
import { Timer } from "~/components/Timer";
import { useEffect, useState } from "react";

// コンポーネント確認ページ
export const SamplePage = () => {
  const [time, setTime] = useState(3);

  useEffect(() => {
    const id = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    // 開発環境だけstrictModeがあるからちょっと変になる
    if (time < 0) {
      clearTimeout(id);
      setTime(0);
    }
  }, [time]);

  return (
    <div css={container}>
      <h1 css={title}>コンポーネント確認ページ</h1>
      <Card>Cardコンポーネントです</Card>
      <TextInput placeholder="TextInputコンポーネントです" />
      <Button onClick={() => console.log("こんにちは")}>
        Buttonコンポーネントです
      </Button>
      <Button color="secondary">Button（secondary）コンポーネントです</Button>
      <Divider direction="horizontal" />
      <div css={userList}>
        <ul>
          {USER_STATUS_LIST.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <Divider direction="vertical" />
      </div>
      <div css={tagAndIconList}>
        <CheckTag isChecked />
        <CheckTag />
        <ParentTag />
        <UserIcon />
        <UserIcon imageUrl="/src/assets/react.svg" />
        <OwnerTag />
      </div>
      <SelectField
        optionList={["テスト", "こんにちは", "あああ"]}
        placeholder="最大人数"
      />
      <Timer time={time} />
    </div>
  );
};

const title = css`
  text-align: center;
`;

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  height: 120vh;
  padding: 80px;
  background: ${colors.primary};
`;

const userList = css`
  display: flex;
  gap: 20px;
`;

const tagAndIconList = css`
  display: flex;
  gap: 20px;
`;
