import { css } from "@emotion/react";
import { ExplanationOTPCard } from "../components/cards/ExplanationOTPCard";
import { Header } from "../components/Header";
import { colors } from "~/styles/themes/colors";

export const ExlanationOTPPage = () => {
  return (
    <div css={pageContainer}>
      <Header />
      <div css={cardContainer}>
        <ExplanationOTPCard />
      </div>
    </div>
  );
};

const pageContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${colors.primary};
`;

const cardContainer = css`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
`;
