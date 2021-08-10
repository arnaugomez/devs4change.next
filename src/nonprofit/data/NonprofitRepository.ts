import { doc, setDoc } from "firebase/firestore";
import { db } from "../../common/data/firebase";
import { User } from "../../user/domain/User";

export async function createNonprofit(user: User): Promise<void> {
  const userRef = doc(db, "/users", user.id);
  await setDoc(doc(db, "/nonprofits", user.id), {
    displayName: user.displayName,
    user: userRef,
  });
}
