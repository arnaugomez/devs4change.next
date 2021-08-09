import { useRecoilState } from "recoil";
import { UserRepository } from "../../data/UserRepository";
import { atom } from "recoil";
import { User } from "../../domain/User";
import { useAlertsStore } from "../../../common/view/store/useAlertsStore";

const userState = atom<User>({
  key: "user", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export function useUserStore() {
  const [user, setUser] = useRecoilState(userState);
  const { errorAlert } = useAlertsStore();

  async function register(email: string, password: string) {
    try {
      const newUser = await new UserRepository().register(email, password);
      setUser(newUser);
    } catch (e) {
      errorAlert(e.message)
    }
  }

  return { user, register };
}
