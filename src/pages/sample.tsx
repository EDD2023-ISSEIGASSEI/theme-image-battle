import { css } from "@emotion/react";
import { colors } from "../styles/themes/colors";
import { Card } from "../components/Card";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";

// コンポーネント確認ページ
export const SamplePage = () => {
  return (
    <div css={container}>
      <h1 css={title}>コンポーネント確認ページ</h1>
      <Card>Cardコンポーネントです</Card>
      <TextInput placeholder="TextInputコンポーネントです" />
      <Button onClick={() => console.log("こんにちは")}>
        Buttonコンポーネントです
      </Button>
      <Button color="secondary">Button（secondary）コンポーネントです</Button>
    </div>
  );
};

const title = css`
  text-align: center;
`;

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  height: 100vh;
  padding: 80px;
  background: ${colors.primary};
`;
