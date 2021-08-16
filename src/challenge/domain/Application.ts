import { User } from "../../user/domain/User";
import { Challenge } from "./Challenge";

export interface Application {
  developer: User;
  challenge: Challenge;
  /** Answers the question "How can I help in this project?" */
  contribution: string;
  /** Answers the question "Why should you choose me for this project?" */
  pitch: string;
}
