import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import slugify from "slugify";
import { db } from "../../common/data/firebase";
import { getCompositeSlug } from "../../common/utils/getCompositeSlug";
import { Challenge } from "../domain/Challenge";
import { CreateChallengeVariables } from "./challengeRepositoryVariables";
import { challengeFromFirebase } from "./transformers/challengeFromFirebase";

export async function getChallengeBySlug(slug: string): Promise<Challenge> {
  const q = query(collection(db, "challenges"), where("slug", "==", slug));
  const result = await getDocs(q);
  if (result.empty) {
    return null;
  }
  return challengeFromFirebase(result.docs[0]);
}

async function generateChallengeSlug(name: string): Promise<string> {
  let slug = slugify(name, { lower: true });
  let num = 0;
  while (await getChallengeBySlug(getCompositeSlug(slug, num))) {
    num++;
  }
  return getCompositeSlug(slug, num);
}

export async function createChallenge(
  variables: CreateChallengeVariables
): Promise<Challenge> {
  const result = await addDoc(collection(db, "challenges"), {
    slug: generateChallengeSlug(variables.name),
    ...variables,
  });
  const challenge = await getDoc(result);
  return challengeFromFirebase(challenge)
}
