import React, { useEffect } from "react";
import { useHeaderBackgroundStore } from "../../src/common/view/store/headerBackgroundStore";
import Profile from "../../src/user/view/components/Profile";
import { useLogoutRedirect } from "../../src/user/view/hooks/useLogoutRedirect";
import { useUserStore } from "../../src/user/view/store/userStore";

export default function ProfilePage() {
  useLogoutRedirect();
  const {user} = useUserStore();

  return user && <Profile user={user} isLoggedIn />
}
