import { websocketAtom } from "~/state/websocket";
import { messageAtom } from "~/state/message";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { Message } from "~/types/message";


export const useMessage = (): Message => {
  const socket = useRecoilValue(websocketAtom);
  const messageList = useRecoilValue(messageAtom);

  const updateMessage = useRecoilCallback(
    ({ set }) =>
      (message: Message) => {
        set(messageAtom, message);
      }
  );
  socket.onmessage = (msg) => {
    const content = JSON.parse(msg.data as string);
    const message: Message = { content: content };
    updateMessage(message);
  };

  return messageList;
};