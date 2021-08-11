import { getUserBySlug } from "../../src/user/data/userRepository";
import { User } from "../../src/user/domain/User";

interface Context {
  params: {
    slug: string;
  };
}

export async function getServerSideProps({ params: { slug } }: Context) {
  const user = await getUserBySlug(slug);

  return {
    props: user,
    notFound: !user,
  };
}

export default function ProfileSlug(user: User) {
  return JSON.stringify(user);
}
