import { useEffect, useState } from "react";
import { FinalResultScreen } from "~/components/screens/FinalResultScreen";
import { ResponseCheckScreen } from "~/components/screens/ResponseCheckScreen";
import { ResponseThemeScreen } from "~/components/screens/ResponseThemeScreen";
import { ThemePromptScreen } from "~/components/screens/ThemePromptScreen";
import { TurnResultScreen } from "~/components/screens/TurnResultScreen";
import { WaitingRoomScreen } from "~/components/screens/WaitingRoomScreen";
import { PHASE } from "~/constant/constant";
import { useMessage } from "~/hooks/use-message";
import { GeneratePhase, WaitRoom } from "~/types";

export const GamePage = () => {
  const [phaseState, setPhaseState] = useState<
    WaitRoom | GeneratePhase | undefined
  >(undefined);
  const message = useMessage();

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

    fetchPhaseState();
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
  if (phaseState.phase === PHASE.guess) return <ResponseThemeScreen />;
  if (phaseState.phase === PHASE.showScore) return <ResponseCheckScreen />;
  if (phaseState.phase === PHASE.showCorrectAnswer) return <TurnResultScreen />;
  if (phaseState.phase === PHASE.ending) return <FinalResultScreen />;
  return <div>loading...</div>;
};
