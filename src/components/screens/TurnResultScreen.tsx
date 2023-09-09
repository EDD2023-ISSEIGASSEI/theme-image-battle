import { RESULT_POINT_ITEM } from "~/data";
import { Header } from "../Header";
import { ResultPointItem } from "../ResultPointItem";
import { Divider } from "../Divider";
import { ResultImage } from "../ResultImage";
import { Button } from "../Button";
import { css } from "@emotion/react";

export const TurnResultScreen = () => {
  return (
    <>
      <Header imageUrl="" />
      <h1>{2}ターン目 結果発表</h1>
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 140px;
        `}
      >
        <div>
          <ul>
            {RESULT_POINT_ITEM.map((result) => (
              <li>
                <ResultPointItem
                  name={result.name}
                  replyTheme={result.replyTheme}
                  point={result.point}
                />
              </li>
            ))}
          </ul>
          <Divider direction="horizontal" />
          <p
            css={css`
              font-size: 4rem;
            `}
          >
            合計： {300}pt
          </p>
        </div>
        <ResultImage />
      </div>
      <Button
        css={css`
          display: block;
          margin-left: 800px;
        `}
      >
        次の親へ
      </Button>
    </>
  );
};
