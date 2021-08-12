import { useRouter } from "next/router";
import { useEffect } from "react";
import { UserType } from "../../domain/UserType";
import { useUserStore } from "../store/userStore";

/**
 * Makes the current page forbidden if the user is not logged in or if it is a developer. In that case, it redirects to the home page
 * @param route The route the user should be redirected to. By default, it is /home
 */
export function useDeveloperRedirect(route?: string) {
  const router = useRouter();
  const { user } = useUserStore();

  useEffect(() => {
    if (!user || user.type === UserType.DEV) {
      router.push(route || "/home");
    }
  }, [user, router, route]);
}
