import {
  getAuth,
  createUserWithEmailAndPassword,
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

  async register(
    displayName: string,
    email: string,
    password: string,
    userType: UserType
  ): Promise<User> {
    const {user} = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    await updateProfile(user, {
      displayName,
    });
    console.log(this.db)
    await setDoc(doc(this.db, "/users", user.uid), {
      displayName,
      email,
      type: userType
    });
    const snapshot = await getDoc(doc(this.db, "/users", user.uid))

    return firebaseUserToUser(snapshot);
  }
}
