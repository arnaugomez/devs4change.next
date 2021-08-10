import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserStore } from "../store/userStore";

export function useLoginRedirect(route?: string) {
  const router = useRouter();
  const { user } = useUserStore();

  useEffect(() => {
    if (user) {
      router.push(route || "/dashboard");
    }
  }, [user, router, route]);
}