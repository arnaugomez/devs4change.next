import { useNonprofitStore } from "../../../nonprofit/view/store/nonprofitStore";
import { createChallenge } from "../../data/challengeRepository";
import { CreateChallengeVariables } from "../../data/challengeRepositoryVariables";
import { Challenge } from "../../domain/Challenge";

export function useChallengeStore() {
  const nonprofitStore = useNonprofitStore();

  async function create(values: CreateChallengeVariables): Promise<Challenge> {
    const challenge = await createChallenge(values);
    await nonprofitStore.addChallenge(challenge);
    return challenge;
  }

  return { create };
}
