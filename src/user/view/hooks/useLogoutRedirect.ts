import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserStore } from "../store/userStore";

export function useLogoutRedirect(route?: string) {
  const router = useRouter();
  const { user, isFetchingPersistedUser } = useUserStore();

  useEffect(() => {
    if (!isFetchingPersistedUser && !user) {
      router.push(route || "/login");
    }
  }, [isFetchingPersistedUser, user, router, route]);
}
