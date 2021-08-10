import { User } from "../../domain/User";

import { UserType } from "../../domain/UserType";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";

export function firebaseUserToUser(snapshot: DocumentSnapshot<DocumentData>): User {
  const data = snapshot.data()
  
  return {
    id: snapshot.id,
    email: data.email,
    name: data.displayName,
    type: UserType[data.type],
  };
}
