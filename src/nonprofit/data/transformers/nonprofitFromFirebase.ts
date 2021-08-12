import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import { cleanse } from "../../../common/utils/cleanse";
import { Nonprofit } from "../../domain/Nonprofit";

export function nonprofitFromFirebase(
  snapshot: DocumentSnapshot<DocumentData>
): Nonprofit {
  if (!snapshot.exists()) {
    return null;
  }
  const { id } = snapshot;
  const { type, challenges } = snapshot.data();
  return cleanse({ id, type, challenges });
}
