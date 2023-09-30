import { Header } from "../Header";
import { Divider } from "../Divider";
import { Button } from "../Button";
import { css } from "@emotion/react";
import { UserStatusList } from "../UserStatusList";
import { Timer } from "../Timer";
import { TextInput } from "../TextInput";
import { GeneratePhase } from "~/types";
import { UserStatePropsFromPlayerState } from "../UserStatus";
import { useState } from "react";

type Props = {
  generatePhaseState: GeneratePhase;
};

export const ThemePromptScreen = ({ generatePhaseState }: Props) => {
  const [input, setInput] = useState("");

  const onSubmit = async () => {
    console.log("input: ", input);
    if (input === "") return;
    const res = await fetch("/api/game/prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: input
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
                userStatusList={generatePhaseState.state.playerStates.map(
                  (playerState) =>
                    UserStatePropsFromPlayerState(playerState, "")
                )}
              />
            </li>
          </ul>
          <Divider direction="vertical" />
        </div>
        <div>
          <Timer time={20} />
          <h1>お題</h1>
          <div
            css={css`
              display: flex;
              gap: 32px;
            `}
          >
            <p>三味線</p>
            <p>を演奏する</p>
            <p>ピカチュウ</p>
          </div>
        </div>
        <label>
          画像生成指示
          <TextInput
            placeholder="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <Button onClick={onSubmit} disabled={input === ""}>
          決定
        </Button>
      </div>
    </>
  );
};
