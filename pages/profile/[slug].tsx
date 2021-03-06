import { getDeveloperById } from "../../src/developer/data/developerRepository";
import { Developer } from "../../src/developer/domain/Developer";
import { getNonprofitById } from "../../src/nonprofit/data/NonprofitRepository";
import { Nonprofit } from "../../src/nonprofit/domain/Nonprofit";
import { getUserBySlug } from "../../src/user/data/UserRepository";
import { User } from "../../src/user/domain/User";
import Profile from "../../src/user/view/components/Profile";
import { useUserStore } from "../../src/user/view/store/userStore";

interface Context {
  params: {
    slug: string;
  };
}

interface Payload {
  user: User;
  nonprofit: Nonprofit;
  developer: Developer;
}

export async function getServerSideProps({ params: { slug } }: Context) {
  const user = await getUserBySlug(slug);
  if (!user) {
    return { notFound: true };
  }
  const developer = await getDeveloperById(user.id);
  const nonprofit = await getNonprofitById(user.id);

  return { props: { user, developer, nonprofit } };
}

export default function ProfileSlug(payload: Payload) {
  const { user } = useUserStore();
  return (
    <Profile {...payload} isPrivate={user && user.id === payload.user.id} />
  );
}
