import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { FinalResultScreen } from "~/components/screens/FinalResultScreen";
import { ResponseCheckScreen } from "~/components/screens/ResponseCheckScreen";
import { ResponseThemeScreen } from "~/components/screens/ResponseThemeScreen";
import { ThemePromptScreen } from "~/components/screens/ThemePromptScreen";
import { TurnResultScreen } from "~/components/screens/TurnResultScreen";
import { WaitingRoomScreen } from "~/components/screens/WaitingRoomScreen";
import { PHASE } from "~/constant/constant";
import { useMessage } from "~/hooks/use-message";
import { userId } from "~/state/user";
import { GeneratePhase, GuessPhase, WaitRoom } from "~/types";

export const GamePage = () => {
  const [phaseState, setPhaseState] = useState<
    WaitRoom | GeneratePhase | GuessPhase | undefined
  >(undefined);
  const message = useMessage();
  const [, setUserId] = useRecoilState(userId);

  useEffect(() => {
    const fetchPhaseState = async () => {
      const res = await fetch("/api/game/phaseState", {
        headers: {
          "Content-Type": "application/json"
        }
      });

      const json = await res.json();
      console.log("phase", json);
      setPhaseState(json);
    };

    const fetchUser = async () => {
      const res = await fetch("/api/user", {
        headers: {
          "Content-Type": "application/json"
        }
      });

      const json = await res.json();
      console.log("user", json);
      setUserId(json.id);
    };

    fetchPhaseState();
    fetchUser();
  }, []);

  useEffect(() => {
    console.log(message);
    if (message.content === "") return;
    setPhaseState(message.content);
  }, [message]);

  if (phaseState === undefined) return <div>loading...</div>;
  if (phaseState.phase === PHASE.waiting)
    return <WaitingRoomScreen waitRoom={phaseState as WaitRoom} />;
  if (phaseState.phase === PHASE.generate)
    return (
      <ThemePromptScreen generatePhaseState={phaseState as GeneratePhase} />
    );
  if (phaseState.phase === PHASE.guess)
    return <ResponseThemeScreen guessPhaseState={phaseState as GuessPhase} />;
  if (phaseState.phase === PHASE.showScore) return <ResponseCheckScreen />;
  if (phaseState.phase === PHASE.showCorrectAnswer) return <TurnResultScreen />;
  if (phaseState.phase === PHASE.ending) return <FinalResultScreen />;
  return <div>loading...</div>;
};
