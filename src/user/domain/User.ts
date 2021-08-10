import { UserType } from "./UserType";

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
}
