import { UserType } from "./UserType";

export interface User {
  email?: string;
  /**
   * The firebase uid of the user. It also identifies the user in the Firestore database
   */
  id: string;
  /**
   * The user's username
   */
  displayName: string;
  slug: string;
  /**
   * Whether the user is a developer, a non-profit, or a startup
   */
  type: UserType;
  /**
   * Short description of the user, in plain text
   */
  intro?: string;
  /**
   * Long description of the user, in html markup
   */
  bio?: string;
  /**
   * Profile picture of the user
   */
  photoUrl?: string;
  
  backgroundImage?: string;
}
