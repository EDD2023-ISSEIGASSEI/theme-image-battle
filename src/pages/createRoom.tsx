import { css } from "@emotion/react";
import { Header } from "../components/Header";
import { CreateRoomFormCard } from "../components/cards/CreateRoomFormCard";
import { colors } from "~/styles/themes/colors";
import { useLoaderData } from "react-router-dom";
import { User } from "~/types";

export const CreateRoomPage = () => {
  const user = useLoaderData() as User | null;

  return (
    <div css={createRoomPageStyle}>
      <Header user={user?.id ? user : null} />
      <div css={formContainerStyle}>
        <CreateRoomFormCard />
      </div>
    </div>
  );
};

const createRoomPageStyle = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.primary};
`;

const formContainerStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
