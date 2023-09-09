import { WAITING_USER_LIST } from "~/data";
import { Header } from "../Header";
import { RoomId } from "../RoomId";
import { WaitingUserIcon } from "../WaitingUserIcon";
import { css } from "@emotion/react";
import { Button } from "../Button";
import { SelectField } from "../SelectField";

const optionList = [
  { value: 1, label: "1ラウンド" },
  { value: 2, label: "2ラウンド" },
  { value: 3, label: "3ラウンド" },
  { value: 4, label: "4ラウンド" }
];

export const WaitingRoomScreen = () => {
  return (
    <>
      <Header imageUrl="" />
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
    </>
  );
};

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
