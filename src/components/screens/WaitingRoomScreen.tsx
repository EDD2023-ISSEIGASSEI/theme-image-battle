import { WAITING_USER_LIST } from "~/data";
import { Header } from "../Header";
import { RoomId } from "../RoomId";
import { WaitingUserIcon } from "../WaitingUserIcon";
import { css } from "@emotion/react";
import { Button } from "../Button";
import { SelectField } from "../SelectField";
import { colors } from "~/styles/themes/colors";
import { useLoaderData, useLocation } from "react-router-dom";
import { User } from "~/types";
import { useEffect, useState } from "react";

const optionList = [
  { value: 1, label: "1ラウンド" },
  { value: 2, label: "2ラウンド" },
  { value: 3, label: "3ラウンド" },
  { value: 4, label: "4ラウンド" }
];

export const WaitingRoomScreen = () => {
  const user = useLoaderData() as User | null;
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const id = query.get("id");
  const [room, setRoom] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/room/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id,
          password: "test"
        })
      });

      const json = await res.json();
      setRoom(json);
    })();
  }, []);

  return (
    <div css={container}>
      <Header user={user?.id ? user : null} />
      <div css={content}>
        <h1>部屋名</h1>
        <RoomId roomId="578305749" />
        <p
          css={css`
            font-size: 2.4rem;
            margin: 32px;
          `}
        >
          {5}/{7}
        </p>
        <ul css={list}>
          {WAITING_USER_LIST.map((user) => (
            <li css={item} key={user.id}>
              <WaitingUserIcon
                css={userIcon}
                id={user.id}
                name={user.name}
                isOwner={user.isOwner}
                imageUrl={user.imageUrl}
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
          <SelectField optionList={optionList} placeholder="1〜5ラウンド" />
          <Button>作成</Button>
        </div>
      </div>
    </div>
  );
};

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
