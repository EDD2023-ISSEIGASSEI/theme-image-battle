import { atom } from "recoil";

export const userId = atom<string | undefined>({
  key: "userId",
  default: undefined
});
