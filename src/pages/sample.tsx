import { css } from "@emotion/react";
import { colors } from "../styles/themes/colors";
import { Card } from "../components/Card";
import { TextInput } from "../components/TextInput";

// コンポーネント確認ページ
export const SamplePage = () => {
  return (
    <div css={container}>
      <h1 css={title}>コンポーネント確認ページ</h1>
      <Card>サンプルCardです</Card>
      <TextInput placeholder="password" />
    </div>
  );
};

const title = css`
  text-align: center;
`;

const container = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100vh;
  padding: 80px;
  background: ${colors.primary};
`;
