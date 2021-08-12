import { Developer } from "../../developer/domain/Developer";

export interface Challenge {
  /**
   * The unique identifier of the challenge, generated by Firebase
   */
  id: string;
  /**
   * The title of the challenge
   */
  name: string;
  /**
   * The unique slug of the challenge
   */
  slug: string;
  /**
   * A short description of the challenge, in plain text
   */
  intro: string;
  /**
   * The final product that they want to achieve
   */
  result: string;
  /** A long explanation of the challenge, in html markup */
  description?: string;
  /** Expected duration of the challenge */
  duration?: string;
  /** Expected amount of developers that we need to complete the challenge. 1-5 developers */
  developersAmount?: number;
  /** Expected date that the challenge will start */
  startDate?: Date;
  coverImage?: string;
  /** Whether the challenge has been successfully completed */
  completed?: boolean;
  /** The developers that have been SELECTED by the nonprofit to do the challenge */
  developers?: Developer[];
  // applications?: Application[]
}
