import { User } from "../../domain/User";

import { User as FirebaseUser } from "firebase/auth";

export function firebaseUserToUser(user: FirebaseUser): User {
  return {
    email: user.email,
    name: user.displayName,
  };
}
