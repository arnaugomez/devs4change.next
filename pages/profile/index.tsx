import React from "react";
import { useDeveloperStore } from "../../src/developer/view/store/developerStore";
import { useNonprofitStore } from "../../src/nonprofit/view/store/nonprofitStore";
import Profile from "../../src/user/view/components/Profile";
import { useLogoutRedirect } from "../../src/user/view/hooks/useLogoutRedirect";
import { useUserStore } from "../../src/user/view/store/userStore";

export default function ProfilePage() {
  useLogoutRedirect();
  const {user} = useUserStore();
  const {nonprofit} = useNonprofitStore();
  const {developer} = useDeveloperStore()

  return user && <Profile user={user} nonprofit={nonprofit} developer={developer} isLoggedIn />
}
