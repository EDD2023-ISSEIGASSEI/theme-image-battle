import { Header } from "../Header";
import { Divider } from "../Divider";
import { Button } from "../Button";
import { css } from "@emotion/react";
import { UserStatusList } from "../UserStatusList";
import { Timer } from "../Timer";
import { TextInput } from "../TextInput";
import { ShowScorePhase } from "~/types";
import { UserStatePropsFromPlayerState } from "../UserStatus";
import { useRecoilValue } from "recoil";
import { userId as userIdState } from "~/state/user";

type Props = {
  showScorePhaseState: ShowScorePhase;
};

export const ResponseCheckScreen = ({ showScorePhaseState }: Props) => {
  const userId = useRecoilValue(userIdState);

  const hasNext = () => {
    const showingPlayerIdx = showScorePhaseState.state.playerStates.findIndex(
      (playerState) =>
        playerState.player.id === showScorePhaseState.state.showingPlayerId
    );

    let nextIndex = showingPlayerIdx + 1;
    for (;;) {
      if (nextIndex >= showScorePhaseState.state.playerStates.length) {
        nextIndex = -1;
        break;
      }
      if (
        showScorePhaseState.state.playerStates[nextIndex].player.id !==
        showScorePhaseState.state.dealerPlayerId
      )
        break;
      nextIndex++;
    }
    if (nextIndex === -1) return false;
    return true;
  };

  const onNext = async () => {
    if (userId !== showScorePhaseState.state.dealerPlayerId) return;
    const res = await fetch("/api/game/showScore/next", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (res.status !== 200) {
      console.error(res.status);
    }
  };

  const hasPrev = () => {
    const showingPlayerIdx = showScorePhaseState.state.playerStates.findIndex(
      (playerState) =>
        playerState.player.id === showScorePhaseState.state.showingPlayerId
    );

    let nextIndex = showingPlayerIdx - 1;
    for (;;) {
      if (nextIndex < 0) {
        nextIndex = -1;
        break;
      }
      if (
        showScorePhaseState.state.playerStates[nextIndex].player.id !==
        showScorePhaseState.state.dealerPlayerId
      )
        break;
      nextIndex--;
    }
    if (nextIndex === -1) return false;
    return true;
  };

  const onPrev = async () => {
    if (userId !== showScorePhaseState.state.dealerPlayerId) return;
    const res = await fetch("/api/game/showScore/prev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (res.status !== 200) {
      console.error(res.status);
    }
  };

  const onNextPhase = async () => {
    if (userId !== showScorePhaseState.state.dealerPlayerId) return;
    const res = await fetch("/api/game/showScore/end", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
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
                userStatusList={showScorePhaseState.state.playerStates.map(
                  (playerState) =>
                    UserStatePropsFromPlayerState(
                      playerState,
                      showScorePhaseState.state.dealerPlayerId
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
            ほんとは隠す
            <TextInput
              placeholder="left"
              value={
                showScorePhaseState.state.playerAnswer.answer.blankAnswers[0]
              }
            />
            <p>を演奏する</p>
            <TextInput
              placeholder="right"
              value={
                showScorePhaseState.state.playerAnswer.answer.blankAnswers[1]
              }
            />
          </div>
          <p
            css={css`
              font-size: 2rem;
            `}
          >
            {showScorePhaseState.state.playerAnswer.answer.score} pt
          </p>
        </div>
        <div>
          <div
            css={css`
              display: flex;
              gap: 32px;
            `}
          >
            <Button
              onClick={onPrev}
              disabled={
                userId !== showScorePhaseState.state.dealerPlayerId ||
                !hasPrev()
              }
            >
              前の人へ
            </Button>
            {hasNext() ? (
              <Button
                onClick={onNext}
                disabled={userId !== showScorePhaseState.state.dealerPlayerId}
              >
                次の人へ
              </Button>
            ) : (
              <Button
                onClick={onNextPhase}
                disabled={userId !== showScorePhaseState.state.dealerPlayerId}
              >
                答え合わせ
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
