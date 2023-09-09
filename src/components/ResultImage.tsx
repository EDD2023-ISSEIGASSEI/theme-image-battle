import { css } from "@emotion/react";
import { colors } from "../styles/themes/colors";

// ResultImageコンポーネント
// 上にはAPIから取得したブロブの画像を表示する
// 下には結果の文を表示する
// 「：」の位置を縦でそろえる
// 例：
// 親：ほげ太郎
// お題：三味線を演奏するピカチュウ
// 生成指示：弦楽器 黄色いネズミ

export const ResultImage = () => {
  return (
    <div css={wrapper}>
      <img css={imgStyle} src="https://picsum.photos/seed/picsum/300/300" alt="resultImage" />
      <p css={parent}>親: ほげ太郎</p>
      <p css={theme}>
        <span css={themeSpan}>お題:</span>
        <span>
          三味線を演奏するピカチュウ
        </span>
      </p>
      <p>生成指示: 弦楽器 黄色いネズミ鶴太郎</p>
    </div>
  );
};

const wrapper = css`
  color: ${colors.black.lighten[1]};
  font-size: 2rem;
`;

const imgStyle = css`
  display: block;
  margin: 0 auto 40px auto;
`;

const parent = css`
  padding-left: 60px;
`;

const theme = css`
  display: flex;
  padding-left: 40px;
`;

// 改行させずに右の行を押し出す
const themeSpan = css`
  white-space: nowrap;
  width: fit-content;
`;





