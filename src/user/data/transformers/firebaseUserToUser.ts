import { User } from "../../domain/User";

import { UserType } from "../../domain/UserType";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";

export function firebaseUserToUser(
  snapshot: DocumentSnapshot<DocumentData>
): User {
  if (!snapshot.exists()) {
    return null;
  }
  const { id } = snapshot;
  const { email, displayName, slug, type, backgroundImage, bio } = snapshot.data();

  return {
    id,
    email,
    displayName,
    slug,
    bio: bio ?? null,
    backgroundImage: backgroundImage ?? null,
    type: UserType[type] ?? null,
  };
}
