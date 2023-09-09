import { UserStatusProps } from "~/components/UserStatus";



export const USER_STATUS_LIST: UserStatusProps[] = [
  {
    id: "fd;qb3-7gna;ojef",
    name: "ほげ太郎",
    score: 40,
    isAction: true,
    role: "親"
  },
  {
    id: "fd;qfaaa",
    name: "ふが太郎",
    score: 50,
    isAction: false,
    role: "子"
  },
  {
    id: "fd;qb3-7gna;ojgggef",
    name: "もげ太郎",
    score: 70,
    isAction: true,
    role: "子"
  },
  {
    id: "fd;qcc7gna;ojef",
    name: "もも太郎",
    score: 80,
    isAction: false,
    role: "子"
  },
  {
    id: "fd;qb3-7gghhhna;ojef",
    name: "つる太郎",
    score: 20,
    isAction: true,
    role: "子"
  }
];

type RoomCardProps = {
  name: string;
  id: string;
  currentPeople: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

export const ROOM_LIST:RoomCardProps[] = [
  {
    name: "ほげ太郎",
    id: "fd;qb3-7gna;ojef",
    currentPeople: 4
  },
  {
    name: "ふが太郎",
    id: "fd;qfaaa",
    currentPeople: 7
  },
  {
    name: "もげ太郎",
    id: "fd;qb3-7gna;ojgggef",
    currentPeople: 2
  },
  {
    name: "もも太郎",
    id: "fd;qcc7gna;ojef",
    currentPeople: 7
  },
];

