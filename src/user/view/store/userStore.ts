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

  async function register(
    userName: string,
    email: string,
    password: string,
    userType: UserType
  ) {
    try {
      const newUser = await new UserRepository().register(
        userName,
        email,
        password,
        userType
      );
      console.log(newUser);
      setUser(newUser);
    } catch (e) {
      console.log(e);
      errorAlert(e.message);
    }
  }

  return { user, register };
}
