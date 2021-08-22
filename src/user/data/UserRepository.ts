import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import slugify from "slugify";
import { auth, db, googleAuthProvider } from "../../common/data/firebase";
import { getCompositeSlug } from "../../common/utils/getCompositeSlug";
import { User } from "../domain/User";
import { UserType } from "../domain/UserType";
import { firebaseUserToUser } from "./transformers/firebaseUserToUser";
import { EditUserVariables } from "./variables/editUserVariables";

async function generateUserSlug(displayName: string): Promise<string> {
  let slug = slugify(displayName, { lower: true });
  let num = 0;
  while (await getUserBySlug(getCompositeSlug(slug, num)) || getCompositeSlug(slug, num) === "edit") {
    num++;
  }
  return getCompositeSlug(slug, num);
}

export async function getUserBySlug(slug: string): Promise<User> {
  const q = query(collection(db, "users"), where("slug", "==", slug));
  const result = await getDocs(q);
  if (result.empty) {
    return null;
  }
  return firebaseUserToUser(result.docs[0]);
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
    slug: await generateUserSlug(displayName),
    email,
    type: userType,
  });
  return await getUserByUid(user.uid);
}

export async function loginUser(
  email: string,
  password: string
): Promise<User> {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return await getUserByUid(user.uid);
}

export async function logoutUser() {
  await signOut(auth);
}

export async function persistUserData(): Promise<void> {
  await setPersistence(auth, browserLocalPersistence);
}

export async function getPersistedUser(): Promise<User> {
  const user = auth.currentUser;
  if (!user) {
    return null;
  }
  return await getUserByUid(user.uid);
}

export async function registerUserWithGoogle(
  userType: UserType
): Promise<User> {
  const { user } = await signInWithPopup(auth, googleAuthProvider);
  const { displayName, uid, email, photoURL } = user;
  await setDoc(doc(db, "/users", uid), {
    displayName,
    slug: await generateUserSlug(displayName),
    email,
    type: userType,
    photoURL
  });
  return await getUserByUid(user.uid);
}

export async function loginUserWithGoogle(): Promise<User> {
  const { user } = await signInWithPopup(auth, googleAuthProvider);
  return await getUserByUid(user.uid);
}

export async function editUser(variables: EditUserVariables): Promise<User> {
  const {userId, ...restVariables} = variables;
  const userRef = doc(db, 'users', userId);
  await updateDoc(userRef, {...restVariables})
  return await getUserByUid(userId);
}