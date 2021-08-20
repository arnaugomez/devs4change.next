import React, { ReactComponentElement, ReactNode } from "react";
import Loading from "../../src/common/view/components/atoms/Loading";
import MaxWidth from "../../src/common/view/components/atoms/MaxWidth";
import DeveloperWelcomeBanner from "../../src/developer/view/components/DeveloperWelcomeBanner";
import NonprofitWelcomeBanner from "../../src/nonprofit/view/components/NonprofitWelcomeBanner";
import { User } from "../../src/user/domain/User";
import { useLogoutRedirect } from "../../src/user/view/hooks/useLogoutRedirect";
import { useUserStore } from "../../src/user/view/store/userStore";

const mapUserTypeToWelcomeBanner: Record<
  User["type"],
  typeof DeveloperWelcomeBanner
> = {
  DEV: DeveloperWelcomeBanner,
  NONPROFIT: NonprofitWelcomeBanner,
  STARTUP: NonprofitWelcomeBanner,
};

export default function Home() {
  useLogoutRedirect();
  const { user } = useUserStore();
  if (!user) return <Loading />;

  const BannerComponent = mapUserTypeToWelcomeBanner[user.type];

  return (
    <MaxWidth>
      <h2 className="text-4xl font-display font-bold pb-8">Home</h2>
      <BannerComponent user={user} />
    </MaxWidth>
  );
}
