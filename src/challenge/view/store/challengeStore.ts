import { useUserStore } from "../../../user/view/store/userStore";
import {
  applyToChallenge,
  createChallenge,
} from "../../data/challengeRepository";
import {
  ApplyToChallengeVariables,
  CreateChallengeVariables,
} from "../../data/challengeRepositoryVariables";
import { Challenge } from "../../domain/Challenge";

export function useChallengeStore() {
  const { user } = useUserStore();
  async function create(values: CreateChallengeVariables): Promise<Challenge> {
    return await createChallenge(values, user);
  }

  async function apply(
    variables: Omit<ApplyToChallengeVariables, "user">
  ) {
    return await applyToChallenge({
      user,
      ...variables,
    });
  }

  return { create, apply };
}
