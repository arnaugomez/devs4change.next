import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import { cleanse } from "../../../common/utils/cleanse";
import { Challenge } from "../../domain/Challenge";

export function challengeFromFirebase(
  snapshot: DocumentSnapshot<DocumentData>
): Challenge {
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
    developers,
  } = snapshot.data();

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
    developers,
  });
}
