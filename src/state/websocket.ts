import { atom, selector } from "recoil";
import { w3cwebsocket } from "websocket";

const connect = (): Promise<w3cwebsocket> => {
  return new Promise((resolve, reject) => {
    const socket = new w3cwebsocket("wss://localhost:7181/api/game/ws");
    socket.onopen = () => {
      console.log("connected");
      resolve(socket);
    };
    socket.onclose = () => {
      console.log("reconnecting...");
      connect();
    };
    socket.onerror = (err) => {
      console.log("connection error:", err);
      reject(err);
    };
  });
};

const connectWebsocketSelector = selector({
  key: "connectWebsocket",
  get: async (): Promise<w3cwebsocket> => {
    return await connect();
  },
});

export const websocketAtom = atom<w3cwebsocket>({
  key: "websocket",
  default: connectWebsocketSelector,
});
