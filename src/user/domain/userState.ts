import { atom } from "recoil";
import { User } from "./User";

export const userState = atom<User>({
  key: 'user', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});