import { UserType } from "./UserType";

export interface User {
  id: string;
  displayName: string;
  email: string;
  type: UserType;
}
