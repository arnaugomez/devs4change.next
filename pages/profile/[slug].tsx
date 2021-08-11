import { useEffect } from "react";
import { useHeaderBackgroundStore } from "../../src/common/view/store/headerBackgroundStore";
import { getUserBySlug } from "../../src/user/data/userRepository";
import { User } from "../../src/user/domain/User";
import Profile from "../../src/user/view/components/Profile";
import { useUserStore } from "../../src/user/view/store/userStore";

interface Context {
  params: {
    slug: string;
  };
}

export async function getServerSideProps({ params: { slug } }: Context) {
  const user = await getUserBySlug(slug);

  return {
    props: { user },
    notFound: !user,
  };
}

export default function ProfileSlug({ user }: { user: User }) {
  const userStore = useUserStore();
  return (
    <Profile
      user={user}
      isLoggedIn={userStore.user && userStore.user.id === user.id}
    />
  );
}
