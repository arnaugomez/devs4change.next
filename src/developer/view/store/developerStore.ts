import { atom, useRecoilState } from "recoil";
import { User } from "../../../user/domain/User";
import { createDeveloper, getDeveloperById } from "../../data/developerRepository";
import { Developer } from "../../domain/Developer";

const developerState = atom<Developer>({
  key: "developer",
  default: null,
});

export function useDeveloperStore() {
  const [developer, setDeveloper] = useRecoilState(developerState);

  async function create(user: User): Promise<void> {
    await createDeveloper(user);
    setDeveloper({ id: user.id });
  }
  async function updateDeveloper(user: User): Promise<void> {
    const developer = await getDeveloperById(user.id);
    setDeveloper(developer);
  }

  return { developer, create, updateDeveloper };
}
