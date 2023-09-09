import { css } from "@emotion/react";
import { colors } from "~/styles/themes/colors";
import { Header } from "../Header";
import { ResultRankItem } from "../ResultRankItem";
import { RankingList } from "~/data";
import { Button } from "../Button";

export const FinalResultScreen = () => {
  return (
    <div css={pageContainer}>
      <Header imageUrl={null} />
      <div css={bodyStyle}>
        <p css={title}>結果発表</p>
        <div css={rankStyle}>
          {RankingList.map((rank) => (
            <ResultRankItem key={rank.rank} rank={rank.rank} name={rank.name} point={rank.point} />
          ))}
        </div>
        <div css={buttonStyle}>
          <Button>ホームに戻る</Button>
        </div>
      </div>
    </div>
  );
};

const pageContainer = css`
  color: ${colors.black.lighten[1]};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const bodyStyle = css`
  max-width: 600px;
  margin: 0 auto;
`;

const title = css`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 30px;
`;

const rankStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  & > * {
    margin-bottom: 20px;
  }
`;

const buttonStyle = css`
  width: 100%;
  display: flex;
  justify-content: end;
`;
