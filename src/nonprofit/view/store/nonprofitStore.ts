import { atom, useRecoilState } from "recoil";
import { Challenge } from "../../../challenge/domain/Challenge";
import { User } from "../../../user/domain/User";
import {
  addChallengeToNonprofit,
  createNonprofit,
  getNonprofitById,
} from "../../data/NonprofitRepository";
import { Nonprofit } from "../../domain/Nonprofit";

const nonprofitState = atom<Nonprofit>({
  default: null,
  key: "nonprofit",
});

export function useNonprofitStore() {
  const [nonprofit, setNonprofit] = useRecoilState(nonprofitState);

  async function create(user: User): Promise<void> {
    await createNonprofit(user);
    setNonprofit({ id: user.id });
  }
  async function loginNonprofit(user: User): Promise<void> {
    const nonprofit = await getNonprofitById(user.id);
    console.log(nonprofit)
    setNonprofit(nonprofit);
  }

  const clearNonprofit = () => setNonprofit(null);

  return { nonprofit, create, loginNonprofit, clearNonprofit };
}
