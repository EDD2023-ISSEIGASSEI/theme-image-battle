import { Header } from "../Header";
import { Divider } from "../Divider";
import { Button } from "../Button";
import { css } from "@emotion/react";
import { UserStatusList } from "../UserStatusList";
import { Timer } from "../Timer";
import { TextInput } from "../TextInput";
import { GuessPhase } from "~/types";
import { UserStatePropsFromPlayerState } from "../UserStatus";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userId as userIdState } from "~/state/user";

type Props = {
  guessPhaseState: GuessPhase;
};

export const ResponseThemeScreen = ({ guessPhaseState }: Props) => {
  const [inputs, setInputs] = useState(["", ""]);
  const userId = useRecoilValue(userIdState);

  const onSubmit = async () => {
    console.log("inputs: ", inputs, guessPhaseState.state.dealerPlayerId);
    if (inputs[0] === "" || inputs[1] === "") return;
    const res = await fetch("/api/game/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        answers: inputs
      })
    });

    if (res.status !== 200) {
      console.error(res.status);
    }
  };

  return (
    <>
      <Header />
      <div>
        <div>
          <ul>
            <li>
              <UserStatusList
                userStatusList={guessPhaseState.state.playerStates.map(
                  (playerState) =>
                    UserStatePropsFromPlayerState(
                      playerState,
                      guessPhaseState.state.dealerPlayerId
                    )
                )}
              />
            </li>
          </ul>
          <Divider direction="vertical" />
        </div>
        <div>
          <Timer time={20} />
          <div
            css={css`
              display: flex;
              gap: 32px;
            `}
          >
            <TextInput
              placeholder="left"
              value={inputs[0]}
              onChange={(e) => setInputs((prev) => [e.target.value, prev[1]])}
            />
            <p>を演奏する</p>
            <TextInput
              placeholder="right"
              value={inputs[1]}
              onChange={(e) => setInputs((prev) => [prev[0], e.target.value])}
            />
          </div>
        </div>
        <Button
          onClick={onSubmit}
          disabled={
            inputs[0] === "" ||
            inputs[1] === "" ||
            guessPhaseState.state.dealerPlayerId === userId
          }
        >
          決定
        </Button>
      </div>
    </>
  );
};
