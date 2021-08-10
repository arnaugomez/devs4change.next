import { atom, useRecoilState } from "recoil";
import { User } from "../../../user/domain/User";
import { createDeveloper } from "../../data/developerRepository";
import { Developer } from "../../domain/Developer";

const developerState = atom<Developer>({
  key: "developer",
  default: null,
});

export function useDeveloperStore() {
  const [developer, setDeveloper] = useRecoilState(developerState);

  async function create(user: User): Promise<void> {
    console.log("Create developer");
    await createDeveloper(user);
    setDeveloper({ id: user.id });
  }

  return { developer, create };
}
