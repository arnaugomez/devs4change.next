import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserStore } from "../store/userStore";

export function useLogoutRedirect(route?: string) {
  const router = useRouter();
  const { user } = useUserStore();

  useEffect(() => {
    if (!user) {
      router.push(route || "/login");
    }
  }, [user, router, route]);
}