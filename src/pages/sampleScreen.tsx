import { css } from "@emotion/react";
import { colors } from "~/styles/themes/colors";
import { WaitingRoomScreen } from "~/components/screens/WaitingRoomScreen";
import { FinalResultScreen } from "~/components/screens/FinalResultScreen";
import { TurnResultScreen } from "~/components/screens/TurnResultScreen";

export const SampleScreenPage = () => {
  return (
    <div css={pageContainer}>
      <WaitingRoomScreen />
      <FinalResultScreen />
      <TurnResultScreen />
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
