import { css } from '@emotion/react';
import { Header } from '../Header';
import { SignupFormCard } from '../cards/SignupFormCard';

export const SignupScreen = () => {
  return (
    <div css={createRoomPageStyle}>
      <Header imageUrl={null} />
      <div css={formContainerStyle}>
        <SignupFormCard />
      </div>
    </div>
  );
}


const createRoomPageStyle = css`
  width: 100%;
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
  margin-top: 50px; 
  margin-bottom: 50px;
`;