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
import { RoomCard } from "~/components/RoomCard";
import { LoginFormCard } from "~/components/cards/LoginFormCard";
import { CreateRoomFormCard } from "~/components/cards/CreateRoomFormCard";
import { AuthOTPFormCard } from "~/components/cards/AuthOTPFormCard";
import { ResultRankItem } from "~/components/ResultRankItem";
import { ResultPointItem } from "~/components/ResultPointItem";
import { UserStatusList } from "~/components/UserStatusList";
import { WaitingUserIcon } from "~/components/WaitingUserIcon";
import { ExplanationOTPCard } from "~/components/cards/ExplanationOTPCard";
import { SignupFormCard } from "~/components/cards/SignupFormCard";
import { Header } from "~/components/Header";
import { RoomId } from "~/components/RoomId";
import { ResultImage } from "~/components/ResultImage";
import { LoginPage } from "~/components/screens/LoginPage";

// コンポーネント確認ページ
export const SamplePage = () => {
  const [time, setTime] = useState(60);

  const roomId = "2957220858";

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
  <>
    <div css={container}>
      <h1 css={title}>コンポーネント確認ページ</h1>
      <Card>Cardコンポーネントです</Card>
      <TextInput placeholder="TextInputコンポーネントです" />
      <Button onClick={() => console.log("こんにちは")}>
        Buttonコンポーネントです
      </Button>
      <Button color="secondary">Button（secondary）コンポーネントです</Button>
      <Divider direction="horizontal" />
      <UserStatusList userStatusList={USER_STATUS_LIST} />
      <div css={tagAndIconList}>
        <CheckTag isChecked />
        <CheckTag />
        <ParentTag />
        <UserIcon />
        <UserIcon imageUrl="/src/assets/images/react.png" />
        <OwnerTag />
      </div>
      <SelectField
        optionList={[
          { value: 1, label: "1人" },
          { value: 2, label: "2人" },
          { value: 3, label: "3人" },
          { value: 4, label: "4人" }
        ]}
        placeholder="最大人数"
      />
      <Timer time={time} />
      <div css={roomList}>
        <RoomCard name="つルーム" id="34376648238" currentPeople={3} />
        <RoomCard name="つルーム" id="34376648238" currentPeople={7} />
      </div>
      <h2 css={title}>フォームカードコンポーネント</h2>
      <LoginFormCard />
      <CreateRoomFormCard />
      <AuthOTPFormCard />
      <ResultRankItem rank={1} name="高橋名人" point={300} />
      <ResultRankItem rank={1} name="ho" point={10} />
      <ResultPointItem
        name="鶴太郎"
        point={200}
        replyTheme="交通事故に遭うhoge太郎"
      />
      <WaitingUserIcon
        isOwner={true}
        imageUrl="/src/assets/images/react.png"
        name="hogeくん"
        id="@fwwithva"
      />
      <ExplanationOTPCard />
      <SignupFormCard />
      <Header imageUrl="" />
      <Header imageUrl="/src/assets/images/react.png" />
      <RoomId roomId={roomId} />
      <ResultImage />
    </div>
    <LoginPage />
  </>
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
  height: 1000vh;
  padding: 80px;
  background: ${colors.primary};
`;

const tagAndIconList = css`
  display: flex;
  gap: 20px;
`;

const roomList = css`
  display: flex;
  gap: 20px;
`;
