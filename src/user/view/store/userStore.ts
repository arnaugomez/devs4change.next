import { useRecoilState } from "recoil";
import { UserRepository } from "../../data/UserRepository";
import { atom } from "recoil";
import { User } from "../../domain/User";
import { useAlertsStore } from "../../../common/view/store/useAlertsStore";
import { UserType } from "../../domain/UserType";

const userState = atom<User>({
  key: "user",
  default: null,
});

export function useUserStore() {
  const [user, setUser] = useRecoilState(userState);
  const { errorAlert } = useAlertsStore();

  async function login(email: string, password: string) {
    try {
      const newUser = await new UserRepository().login(email, password);
      setUser(newUser);
    } catch (e) {
      console.error(e);
      errorAlert(e.message);
    }
  }

  async function register(
    displayName: string,
    email: string,
    password: string,
    userType: UserType
  ) {
    try {
      const newUser = await new UserRepository().register(
        displayName,
        email,
        password,
        userType
      );
      setUser(newUser);
    } catch (e) {
      console.error(e);
      errorAlert(e.message);
    }
  }

  return { user, login, register };
}
