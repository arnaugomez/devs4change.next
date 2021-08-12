import { atom, useRecoilState } from "recoil";
import { User } from "../../../user/domain/User";
import { createNonprofit, getNonprofitById } from "../../data/NonprofitRepository";
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
  async function updateNonprofit(user: User): Promise<void> {
    const nonprofit = await getNonprofitById(user.id);
    setNonprofit(nonprofit);
  }
  const clearNonprofit = () => setNonprofit(null)

  return { nonprofit, create, updateNonprofit, clearNonprofit };
}
