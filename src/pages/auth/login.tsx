import { css } from "@emotion/react";
import { Header } from "../../components/Header";
import { LoginFormCard } from "../../components/cards/LoginFormCard";
import { colors } from "~/styles/themes/colors";

export const LoginPage = () => {
  return (
    <div css={pageContainer}>
      <Header />
      <div css={cardContainer}>
        <LoginFormCard />
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
  margin-top: 30px;
  margin-bottom: 40px;
`;
