import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import { cleanse } from "../../../common/utils/cleanse";
import { Developer } from "../../domain/Developer";

export function developerFromFirebase(
  snapshot: DocumentSnapshot<DocumentData>
): Developer {
  if (!snapshot.exists()) {
    return null;
  }
  const { id } = snapshot;
  const { projects, techStack } = snapshot.data();
  return cleanse({ id, projects, techStack });
}
