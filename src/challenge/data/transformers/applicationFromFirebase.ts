import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import { cleanse } from "../../../common/utils/cleanse";
import { firebaseUserToUser } from "../../../user/data/transformers/firebaseUserToUser";
import { Application } from "../../domain/Application";
import { challengeFromFirebase } from "./challengeFromFirebase";

export async function applicationFromFirebase(
  snapshot: DocumentSnapshot<DocumentData>
): Promise<Application> {
  if (!snapshot.exists) {
    return null;
  }
  const id = snapshot.id;
  const { challenge, user, contribution, pitch, isAccepted, isReviewed } =
    snapshot.data();

  const challengeSnapshot = await getDoc(challenge as DocumentReference);
  const userSnapshot = await getDoc(user as DocumentReference);

  return cleanse({
    id,
    contribution,
    pitch,
    isAccepted,
    isReviewed,
    challenge: await challengeFromFirebase(challengeSnapshot),
    user: firebaseUserToUser(userSnapshot),
  });
}
