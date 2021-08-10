import { Challenge } from "../../challenge/domain/Challenge";
import { NonprofitType } from "./NonprofitType";

export interface Nonprofit {
  /**
   * The firebase uid of the user. It also identifies the user in the Firestore database
   */
  id: string;
  type?: NonprofitType;
  /**
   * Challenges that the nonprofit has created
   * @todo Create Challenge data model
   */
  challenges?: Challenge[];
}
