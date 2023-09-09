import { ResultPointItemProps } from "~/components/ResultPointItem";
import { RoomCardProps } from "~/components/RoomCard";
import { UserStatusProps } from "~/components/UserStatus";
import { WaitingUserIconProps } from "~/components/WaitingUserIcon";

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

export const ROOM_LIST: RoomCardProps[] = [
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
  }
];

export const WAITING_USER_LIST: WaitingUserIconProps[] = [
  {
    isOwner: true,
    imageUrl: "/images/vite.svg",
    name: "たけし",
    id: "@fa25tp0p"
  },
  {
    isOwner: false,
    imageUrl: "",
    name: "たけし",
    id: "@fa25p8f"
  },
  {
    isOwner: false,
    imageUrl: "/images/vite.svg",
    name: "たけし",
    id: "@fa2aa8rhf"
  },
  {
    isOwner: false,
    imageUrl: "",
    name: "たけし",
    id: "@factp0p8rhf"
  },
  {
    isOwner: false,
    imageUrl: "",
    name: "たけし",
    id: "@fftp0p8rhfddd"
  },
  {
    isOwner: false,
    imageUrl: "/images/vite.svg",
    name: "たけし",
    id: "@fa25aa8rhf"
  },
  {
    isOwner: false,
    imageUrl: "",
    name: "いいい",
    id: "@faactp0p8r"
  },
  {
    isOwner: false,
    imageUrl: "",
    name: "あああ",
    id: "@facc25ddd"
  }
];

export const RESULT_POINT_ITEM: ResultPointItemProps[] = [
  { name: "ほげ太郎", point: 200, replyTheme: "今んaaちは" },
  { name: "げ太郎", point: 300, replyTheme: "今んちaaは" },
  { name: "ほ太郎", point: 500, replyTheme: "今んちfffは" },
  { name: "ほげ郎", point: 200, replyTheme: "ff今んちは" }
];
