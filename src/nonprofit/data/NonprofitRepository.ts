import { Nonprofit } from "./../domain/Nonprofit";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../common/data/firebase";
import { User } from "../../user/domain/User";
import { nonprofitFromFirebase } from "./transformers/nonprofitFromFirebase";
import { Challenge } from "../../challenge/domain/Challenge";

export async function createNonprofit(user: User): Promise<void> {
  const userRef = doc(db, "/users", user.id);
  await setDoc(doc(db, "/nonprofits", user.id), {
    displayName: user.displayName,
    user: userRef,
  });
}

export async function getNonprofitById(id: string): Promise<Nonprofit> {
  const nonprofit = await getDoc(doc(db, "/nonprofits", id));
  return nonprofitFromFirebase(nonprofit);
}

export async function addChallengeToNonprofit(
  nonprofit: Nonprofit,
  challenge: Challenge
): Promise<Nonprofit> {
  const nonprofitRef = doc(db, "/nonprofits", nonprofit.id);
  const challengeRef = doc(db, "/challenges", challenge.id);
  const nonprofitData = await getDoc(nonprofitRef);
  const { challenges = [] } = nonprofitData.data();
  await updateDoc(nonprofitRef, {
    challenges: [challengeRef, ...challenges],
  });
  const newNonprofitData = await getDoc(nonprofitRef);
  return nonprofitFromFirebase(newNonprofitData);
}
