import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDeveloperStore } from "../../../developer/view/store/developerStore";
import { useNonprofitStore } from "../../../nonprofit/view/store/nonprofitStore";
import { useUserStore } from "../store/userStore";

export function useLoginRedirect(route?: string) {
  const router = useRouter();
  const { user } = useUserStore();
  const { nonprofit } = useNonprofitStore();
  const { developer } = useDeveloperStore();

  useEffect(() => {
    if (user && (nonprofit || developer)) {
      console.log(developer);
      router.push(route || "/home");
    }
  }, [user, router, route, nonprofit, developer]);
}
