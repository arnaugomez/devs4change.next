import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../common/data/firebase";
import { User } from "../../user/domain/User";
import { Developer } from "../domain/Developer";
import { developerFromFirebase } from "./transformers/developerFromFirebase";


export async function createDeveloper(user: User): Promise<void> {
  const userRef = doc(db, "/users", user.id);
  await setDoc(doc(db, "/developers", user.id), {
    displayName: user.displayName,
    user: userRef,
  });
}

export async function getDeveloperById(id: string): Promise<Developer> {
  const developer = await getDoc(doc(db, "/developers", id))
  return developerFromFirebase(developer)
}