import { useRecoilState } from "recoil";
import { UserRepository } from "../../data/UserRepository";
import { atom } from "recoil";
import { User } from "../../domain/User";
import { useAlertsStore } from "../../../common/view/store/useAlertsStore";

const userState = atom<User>({
  key: "user",
  default: null,
});

export function useUserStore() {
  const [user, setUser] = useRecoilState(userState);
  const { errorAlert } = useAlertsStore();

  async function register(userName: string, email: string, password: string) {
    try {
      const newUser = await new UserRepository().register(
        userName,
        email,
        password
      );
      console.log(newUser);
      setUser(newUser);
    } catch (e) {
      errorAlert(e.message);
    }
  }

  return { user, register };
}
