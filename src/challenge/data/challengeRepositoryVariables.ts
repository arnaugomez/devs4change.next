import { User } from "../../user/domain/User";
import { Challenge } from "../domain/Challenge";

export interface CreateChallengeVariables {
  name: string;
  /** Short description of the challenge */
  intro: string;
  /** Expected result of the challenge */
  result: string;
  /** A long explanation of the challenge, in html markup */
  description?: string;
  /** Expected duration of the challenge */
  duration?: string;
  /** Expected amount of developers that we need to complete the challenge. 1-5 developers */
  developersAmount?: number;
  /** Expected date that the challenge will start */
  startDate?: Date;
}

export interface ApplyToChallengeVariables {
  user: User;
  challenge: Challenge;
  contribution: string;
  pitch: string;
}