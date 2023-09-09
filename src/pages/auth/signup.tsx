import { css } from "@emotion/react";
import { Header } from "../../components/Header";
import { SignupFormCard } from "../../components/cards/SignupFormCard";
import { colors } from "~/styles/themes/colors";

export const SignupPage = () => {
  return (
    <div css={createRoomPageStyle}>
      <Header imageUrl={null} />
      <div css={formContainerStyle}>
        <SignupFormCard />
      </div>
    </div>
  );
};

const createRoomPageStyle = css`
  width: 100%;
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
  margin-top: 50px;
  margin-bottom: 50px;
`;
