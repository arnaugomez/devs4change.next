import { DeveloperProject } from "./DeveloperProject";

export interface Developer {
  /**
   * The firebase uid of the user. It also identifies the user in the Firestore database
   */
  id: string;
  /**
   * 1-3 highlighted projects that the developer wants to show in his/her profile
   */
  projects?: DeveloperProject[];
  /**
   * 1-7 Technologies that the developer is comfortable working with.
   */
  techStack?: string[];
}
// TODO: Add challenges that the developer has applied to and/or been accepted to.
