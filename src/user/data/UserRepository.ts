import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { firebaseUserToUser } from "./transformers/firebaseUserToUser";
import { User } from "../domain/User";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserType } from "../domain/UserType";
import { auth, db } from "../../common/data/firebase";
import slugify from "slugify";

// TODO: Assure that slug is unique by checking database
function generateUserSlug(displayName: string): string {
  return slugify(displayName);
}

async function getUserByUid(uid: string): Promise<User> {
  const snapshot = await getDoc(doc(db, "/users", uid));
  return firebaseUserToUser(snapshot);
}

export async function registerUser(
  displayName: string,
  email: string,
  password: string,
  userType: UserType
): Promise<User> {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, { displayName });
  await setDoc(doc(db, "/users", user.uid), {
    displayName,
    slug: slugify(displayName),
    email,
    type: userType,
  });
  return await getUserByUid(user.uid);
}

export async function loginUser(
  email: string,
  password: string
): Promise<User> {
  console.log(auth);
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return await getUserByUid(user.uid);
}
