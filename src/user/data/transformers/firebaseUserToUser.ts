import { User } from "../../domain/User";

import { UserType } from "../../domain/UserType";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";

export function firebaseUserToUser(
  snapshot: DocumentSnapshot<DocumentData>
): User {
  const { id } = snapshot;
  const { email, displayName, type } = snapshot.data();

  return { id, email, displayName, type: UserType[type] };
}
