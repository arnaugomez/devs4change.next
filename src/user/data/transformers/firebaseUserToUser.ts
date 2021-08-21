import { User } from "../../domain/User";

import { UserType } from "../../domain/UserType";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import { cleanse } from "../../../common/utils/cleanse";

export function firebaseUserToUser(
  snapshot: DocumentSnapshot<DocumentData>
): User {
  if (!snapshot.exists()) {
    return null;
  }
  const { id } = snapshot;
  const {
    email,
    displayName,
    slug,
    type,
    backgroundImage,
    bio,
    photoURL,
    intro,
  } = snapshot.data();

  return cleanse({
    id,
    email,
    displayName,
    slug,
    bio,
    intro,
    backgroundImage,
    photoURL,
    type: UserType[type] ?? null,
  });
}
