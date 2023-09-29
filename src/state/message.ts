import { Message } from "~/types/message";
import { atom } from "recoil";

export const messageAtom = atom<Message>({
  key: "messageList",
  default: { content: "" },
});