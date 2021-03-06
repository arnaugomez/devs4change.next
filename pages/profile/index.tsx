import React from "react";
import Loading from "../../src/common/view/components/atoms/Loading";
import { useDeveloperStore } from "../../src/developer/view/store/developerStore";
import { useNonprofitStore } from "../../src/nonprofit/view/store/nonprofitStore";
import Profile from "../../src/user/view/components/Profile";
import { useLogoutRedirect } from "../../src/user/view/hooks/useLogoutRedirect";
import { useUserStore } from "../../src/user/view/store/userStore";

export default function ProfilePage() {
  useLogoutRedirect();
  const { user } = useUserStore();
  const { developer } = useDeveloperStore();
  const { nonprofit } = useNonprofitStore();

  if (!user) {
    return <Loading />;
  }

  return (
    <Profile
      user={user}
      developer={developer}
      nonprofit={nonprofit}
      isPrivate
    />
  );
}
