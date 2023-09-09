import { css } from "@emotion/react";
import { CopyIcon } from "./icons/CopyIcon";

type RoomIdProps = {
  roomId: string;
};

export const RoomId = ({ roomId }: RoomIdProps) => {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(roomId);
  };

  return (
    <div css={wrapper}>
      <p>ルームID：{roomId}</p>
      <button onClick={copyToClipboard}>
        <CopyIcon />
      </button>
    </div>
  );
};

const wrapper = css`
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  gap: 14px;
`;
