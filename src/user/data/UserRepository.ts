import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  Auth,
  updateProfile,
} from "firebase/auth";
import { firebaseUserToUser } from "./transformers/firebaseUserToUser";
import { User } from "../domain/User";
import { BaseRepository } from "../../common/data/BaseRepository";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserType } from "../domain/UserType";

export class UserRepository extends BaseRepository {
  static instance: UserRepository;
  auth: Auth;

  constructor() {
    super();
    if (UserRepository.instance) {
      return UserRepository.instance;
    }
    this.auth = getAuth();
    UserRepository.instance = this;
  }

  private async getUserByUid(uid: string): Promise<User> {
    const snapshot = await getDoc(doc(this.db, "/users", uid));
    return firebaseUserToUser(snapshot);
  }

  async register(
    displayName: string,
    email: string,
    password: string,
    userType: UserType
  ): Promise<User> {
    const { user } = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    await updateProfile(user, { displayName });
    await setDoc(doc(this.db, "/users", user.uid), {
      displayName,
      email,
      type: userType,
    });
    return await this.getUserByUid(user.uid);
  }

  async login(email: string, password: string): Promise<User> {
    console.log(this.auth)
    const { user } = await signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    return await this.getUserByUid(user.uid);
  }
}
