import { useUserStore } from "../../../user/view/store/userStore";
import { createChallenge } from "../../data/challengeRepository";
import { CreateChallengeVariables } from "../../data/challengeRepositoryVariables";
import { Challenge } from "../../domain/Challenge";

export function useChallengeStore() {
  const { user } = useUserStore();
  async function create(values: CreateChallengeVariables): Promise<Challenge> {
    const challenge = await createChallenge(values, user);

    return challenge;
  }

  return { create };
}
