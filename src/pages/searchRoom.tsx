import { css } from "@emotion/react";
import { Header } from "../components/Header";
import { RoomCard } from "../components/RoomCard";
import { SearchForm } from "../components/SearchForm";
import { useEffect, useState } from "react";
import { Room, User } from "~/types";
import { colors } from "~/styles/themes/colors";
import { useLoaderData } from "react-router-dom";

export const SearchRoomPage = () => {
  const [roomList, setRoomList] = useState<Room[]>([]);
  const user = useLoaderData() as User | null;

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/room/list", {
        headers: {
          "Content-Type": "application/json;"
        }
      });

      const json = await res.json();

      console.log("json: ", json);
      setRoomList(json.rooms);
    })();
  }, []);

  return (
    <div css={pageContainer}>
      <Header user={user?.id ? user : null} />
      <div css={bodyStyle}>
        <SearchForm placeholder="部屋ID検索" />
        <div css={formContainerStyle}>
          {roomList.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

const pageContainer = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.primary};
`;

const bodyStyle = css`
  max-width: 600px;
  margin: 50px auto;
`;

// // 二列で表示
const formContainerStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 50px;
`;
