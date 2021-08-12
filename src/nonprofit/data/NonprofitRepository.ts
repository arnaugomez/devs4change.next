import { Nonprofit } from './../domain/Nonprofit';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../common/data/firebase";
import { User } from "../../user/domain/User";
import { nonprofitFromFirebase } from './transformers/nonprofitFromFirebase';

export async function createNonprofit(user: User): Promise<void> {
  const userRef = doc(db, "/users", user.id);
  await setDoc(doc(db, "/nonprofits", user.id), {
    displayName: user.displayName,
    user: userRef,
  });
}

export async function getNonprofitById(id: string): Promise<Nonprofit> {
  const nonprofit = await getDoc(doc(db, "/developers", id))
  return nonprofitFromFirebase(nonprofit)
}

