import { css } from '@emotion/react';
import { Header } from '../Header';
import { CreateRoomFormCard } from '../cards/CreateRoomFormCard';

export const CreateRoomPage = () => {
  return (
    <div css={createRoomPageStyle}>
      <Header imageUrl={null} />
      <div css={formContainerStyle}>
        <CreateRoomFormCard />
      </div>
    </div>
  );
}


const createRoomPageStyle = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const formContainerStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;