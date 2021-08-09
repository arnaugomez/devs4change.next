import { useRecoilState } from "recoil";
import { UserRepository } from "../../data/UserRepository";
import { userState } from "../../domain/userState";

export function useUserStore() {
  const [user, setUser] = useRecoilState(userState);

  async function register(email: string, password: string) {
    const newUser = await new UserRepository().register(email, password);
    setUser(newUser);
  }

  return { user, register };
}
