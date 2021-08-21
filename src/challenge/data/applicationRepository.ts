import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../common/data/firebase";
import { Challenge } from "../domain/Challenge";
import { applicationFromFirebase } from "./transformers/applicationFromFirebase";

export async function getApplicationsOfChallenge(challenge: Challenge) {
  const challengeRef = doc(db, "challenges", challenge.id);
  const applicationsQuery = query(
    collection(db, "applications"),
    where("challenge", "==", challengeRef)
  );
  const applicationsSnapshots = await getDocs(applicationsQuery);
  return await Promise.all(
    applicationsSnapshots.docs.map(applicationFromFirebase)
  );
}
