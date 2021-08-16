import { useRecoilState } from "recoil";
import { atom } from "recoil";
import { User } from "../../domain/User";
import { useAlertsStore } from "../../../common/view/store/useAlertsStore";
import { UserType } from "../../domain/UserType";
import { useNonprofitStore } from "../../../nonprofit/view/store/nonprofitStore";
import { useDeveloperStore } from "../../../developer/view/store/developerStore";
import {
  getPersistedUser,
  loginUser,
  logoutUser,
  persistUserData,
  registerUser,
} from "../../data/userRepository";
import { useCallback } from "react";

const userState = atom<User>({
  key: "user",
  default: null,
});

const isFetchingPersistedUserState = atom<boolean>({
  key: "isFetchingPersistedUser",
  default: true,
});

export function useUserStore() {
  const [user, setUser] = useRecoilState(userState);
  const [isFetchingPersistedUser, setIsFetchingPersistedUser] = useRecoilState(
    isFetchingPersistedUserState
  );
  const { errorAlert } = useAlertsStore();
  const nonprofitStore = useNonprofitStore();
  const developerStore = useDeveloperStore();

  const getPersisted = useCallback(async function (): Promise<void> {
    await persistUserData();
    const loggedUser = await getPersistedUser();
    if (!loggedUser) {
      setIsFetchingPersistedUser(false);
      return;
    } else if (loggedUser.type === UserType.DEV) {
      await developerStore.updateDeveloper(loggedUser);
    } else if (loggedUser.type === UserType.NONPROFIT) {
      await nonprofitStore.loginNonprofit(loggedUser);
    }
    setUser(loggedUser);
    setIsFetchingPersistedUser(false);
  }, []);

  async function login(email: string, password: string) {
    await persistUserData();
    try {
      const loggedUser = await loginUser(email, password);
      if (loggedUser.type === UserType.DEV) {
        await developerStore.updateDeveloper(loggedUser);
      } else if (loggedUser.type === UserType.NONPROFIT) {
        await nonprofitStore.loginNonprofit(loggedUser);
      }
      setUser(loggedUser);
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
      await persistUserData();
      const newUser = await registerUser(
        displayName,
        email,
        password,
        userType
      );
      if (userType === UserType.DEV) {
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

  async function logout() {
    try {
      await logoutUser();
      nonprofitStore.clearNonprofit();
      developerStore.clearDeveloper();
      setUser(null);
    } catch (e) {
      console.error(e);
      errorAlert(e.message);
    }
  }

  return { isFetchingPersistedUser, user, login, register, logout, getPersisted };
}
