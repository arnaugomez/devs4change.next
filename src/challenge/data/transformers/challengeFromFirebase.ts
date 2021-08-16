import { DocumentData, DocumentReference, DocumentSnapshot, getDoc } from "firebase/firestore";
import { cleanse } from "../../../common/utils/cleanse";
import { firebaseUserToUser } from "../../../user/data/transformers/firebaseUserToUser";
import { Challenge } from "../../domain/Challenge";

export async function challengeFromFirebase(
  snapshot: DocumentSnapshot<DocumentData>
): Promise<Challenge> {
  if (!snapshot.exists()) {
    return null;
  }
  const { id } = snapshot;
  const {
    name,
    slug,
    intro,
    result,
    description,
    duration,
    developersAmount,
    startDate,
    completed,
    user
    //developers,
  } = snapshot.data();
  
  const userSnapshot = user && await getDoc(user as DocumentReference<DocumentData>)

  return cleanse({
    id,
    name,
    slug,
    intro,
    result,
    description,
    duration,
    developersAmount,
    startDate,
    completed,
    // developers,
    user: user && firebaseUserToUser(userSnapshot)
  });
}
