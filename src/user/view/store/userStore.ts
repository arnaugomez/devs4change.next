import { useRecoilState } from "recoil";
import { atom } from "recoil";
import { User } from "../../domain/User";
import { useAlertsStore } from "../../../common/view/store/useAlertsStore";
import { UserType } from "../../domain/UserType";
import { useNonprofitStore } from "../../../nonprofit/view/store/nonprofitStore";
import { useDeveloperStore } from "../../../developer/view/store/developerStore";
import { loginUser, registerUser } from "../../data/userRepository";

const userState = atom<User>({
  key: "user",
  default: null,
});

export function useUserStore() {
  const [user, setUser] = useRecoilState(userState);
  const { errorAlert } = useAlertsStore();
  const nonprofitStore = useNonprofitStore();
  const developerStore = useDeveloperStore();

  async function login(email: string, password: string) {
    try {
      const newUser = await loginUser(email, password);
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
      const newUser = await registerUser(
        displayName,
        email,
        password,
        userType
      );
      console.log(userType);
      if (userType === UserType.DEV) {
        console.log("I'm a dev");
        await developerStore.create(newUser);
      } else if (userType === UserType.NONPROFIT) {
        await nonprofitStore.create(newUser);
      }
      setUser(newUser);
    } catch (e) {
      console.error(e);
      errorAlert(e.message);
    }
  }

  return { user, login, register };
}
