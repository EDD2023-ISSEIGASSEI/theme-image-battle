import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { css } from "@emotion/react";
import { colors } from "./styles/themes/colors";

export const HomePage = () => {
  return (
    <div css={pageContainer}>
      <Header imageUrl={null} />
      <div css={container}>
        <h1 css={title}>hogeticPhone</h1>
        <p css={description}>画力なし救済用GarticPhone風ゲーム</p>
        <div css={buttonSection}>
          <Button css={button}>部屋に入る</Button>
          <Button css={button}>部屋を作る</Button>
        </div>
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

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 40px;
  color: ${colors.black.lighten[1]};
`;

const title = css`
  font-size: 5rem;
  margin-bottom: 60px;
`;

const description = css`
  font-size: 2rem;
  margin-bottom: 100px;
`;

const buttonSection = css`
  display: flex;
  justify-content: space-between;
  gap: 130px;
`;

const button = css`
  padding: 10px 30px;
`;
