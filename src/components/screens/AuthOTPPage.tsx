import { css } from "@emotion/react";
import { Header } from "../Header";
import { AuthOTPFormCard } from "../cards/AuthOTPFormCard";

export const AuthOTPPage = () => {
  return (
    <div css={pageContainer}>
      <Header imageUrl={null} />
      <div css={cardContainer}>
        <AuthOTPFormCard />
      </div>
    </div>
  );
};

const pageContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const cardContainer = css`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
