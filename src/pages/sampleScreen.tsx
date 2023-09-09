import { css } from "@emotion/react";
import { colors } from "~/styles/themes/colors";
import { LoginPage } from "~/components/screens/LoginPage";

export const SampleScreenPage = () => {
  return (
    <div css={pageContainer}>
      <LoginPage />
    </div>
  );
}

const pageContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.primary};
`;
