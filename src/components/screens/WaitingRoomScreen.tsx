import { Header } from "../Header";
import { RoomId } from "../RoomId";
import { WaitingUserIcon } from "../WaitingUserIcon";
import { css } from "@emotion/react";
import { Button } from "../Button";
import { SelectField } from "../SelectField";
import { colors } from "~/styles/themes/colors";
import { useLoaderData } from "react-router-dom";
import { User, waitRoom } from "~/types";
import { useEffect, useState } from "react";
import { useMessage } from "~/hooks/use-message";

export const WaitingRoomScreen = () => {
  const user = useLoaderData() as User | null;
  const [waitRoom, setWaitRoom] = useState<waitRoom>();
  const [selectedValue, setSelectedValue] = useState("");
  const message = useMessage();

  useEffect(() => {
    console.log(message);
    setWaitRoom({ phase: message.content.phase, state: message.content.state });
  }, [message]);

  // select要素の変更ハンドラー
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // 選択された値をstateに設定
    setSelectedValue(event.target.value);
  };

  const fetchWaitRoom = async () => {
    const res = await fetch("/api/game/phaseState", {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const json = await res.json();
    console.log("phase", json);
    setWaitRoom(json);
  };

  useEffect(() => {
    fetchWaitRoom();
  }, []);

  const startHandler = async () => {
    await fetch("/api/game/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        rownd: selectedValue
      })
    });
  };

  if (!waitRoom) return <div>loading...</div>;

  return (
    <div css={container}>
      <Header user={user?.id ? user : null} />
      <div css={content}>
        <h1>{waitRoom.state.roomInfo.name}</h1>
        <RoomId roomId={waitRoom.state.roomInfo.id} />
        <p
          css={css`
            font-size: 2.4rem;
            margin: 32px;
          `}
        >
          {waitRoom.state.roomInfo.playerNum}/
          {waitRoom.state.roomInfo.maxPlayerNum}
        </p>
        <ul css={list}>
          {waitRoom.state.players.map((player) => (
            <li css={item} key={player.id}>
              <WaitingUserIcon
                css={userIcon}
                id={player.id}
                name={player.name}
                isOwner={player.id === waitRoom.state.roomInfo.ownerPlayerId}
                imageUrl={player.iconImageUrl}
              />
            </li>
          ))}
        </ul>
        <div
          css={css`
            display: flex;
            margin-top: 100px;
            width: 400px;
            gap: 60px;
            align-items: center;
          `}
        >
          <Button color="secondary">戻る</Button>
          <SelectField
            onChange={handleSelectChange}
            optionList={optionList}
            placeholder="1〜5ラウンド"
          />
          <Button onClick={startHandler}>スタート</Button>
        </div>
      </div>
    </div>
  );
};

const optionList = [
  { value: 1, label: "1ラウンド" },
  { value: 2, label: "2ラウンド" },
  { value: 3, label: "3ラウンド" },
  { value: 4, label: "4ラウンド" }
];

const container = css`
  height: 100vh;
  background: ${colors.primary};
`;

const content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const list = css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  max-width: 400px;
  row-gap: 20px;
  justify-content: space-between;
`;

const item = css``;

const userIcon = css``;
