import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";
import { firebaseUserToUser } from "./transformers/firebaseUserToUser";
import { User } from "../domain/User";

export class UserRepository {
  static instance: UserRepository;
  auth: Auth;

  constructor() {
    if (UserRepository.instance) {
      return UserRepository.instance;
    }
    this.auth = getAuth();
    UserRepository.instance = this;
  }

  async register(email: string, password: string): Promise<User> {
    const credential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    return firebaseUserToUser(credential.user);
  }
}
