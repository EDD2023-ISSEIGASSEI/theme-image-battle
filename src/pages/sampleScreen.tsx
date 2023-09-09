import { css } from "@emotion/react";
import { colors } from "~/styles/themes/colors";
import { LoginPage } from "~/components/screens/LoginPage";
import { StartPage } from "~/components/screens/StartPage";
import { ExlanationOTPPage } from "~/components/screens/ExplanationOTPPage";
import { AuthOTPPage } from "~/components/screens/AuthOTPPage";
import { CreateRoomPage } from "~/components/screens/CreateRoomPage";

export const SampleScreenPage = () => {
  return (
    <div css={pageContainer}>
      <LoginPage />
      <StartPage />
      <ExlanationOTPPage />
      <AuthOTPPage />
      <CreateRoomPage />
    </div>
  );
};

const pageContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.primary};
`;
