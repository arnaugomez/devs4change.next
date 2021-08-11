import React, { useEffect } from "react";
import MaxWidth from "../../../common/view/components/atoms/MaxWidth";
import { useHeaderBackgroundStore } from "../../../common/view/store/headerBackgroundStore";
import { User } from "../../domain/User";
import ProfileHeader from "./ProfileHeader";

export interface Props {
  user: User;
  /**
   * Whether the user shown in this profile page is the one who has logged in
   */
  isLoggedIn: boolean;
}

export default function Profile({ user, isLoggedIn }: Props) {
  const { setHeaderBackground, clearHeaderBackground } =
    useHeaderBackgroundStore();

  useEffect(() => {
    setHeaderBackground(
      user?.backgroundImage && {
        src: user.backgroundImage,
        alt: `Background image of ${user.displayName}`,
      }
    );
    return () => {
      clearHeaderBackground();
    };
  }, [user, setHeaderBackground, clearHeaderBackground]);

  return (
    <section className="px-4">
      <MaxWidth>
        <ProfileHeader user={user} />
      </MaxWidth>
    </section>
  );
}
