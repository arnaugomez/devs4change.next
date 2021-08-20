import { User } from "../../user/domain/User";
import { Challenge } from "./Challenge";

export interface Application {
  /** The dev that applies to the challenge */
  user: User;
  challenge: Challenge;
  /** Answers the question "How can I help in this project?" */
  contribution?: string;
  /** Answers the question "Why should you choose me for this project?" */
  pitch?: string;
  isReviewed: boolean;
  isAccepted: boolean;
}
