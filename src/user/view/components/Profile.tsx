import React, { useCallback, useEffect, useState } from "react";
import { getApplicationsOfUser } from "../../../challenge/data/applicationRepository";
import { Application } from "../../../challenge/domain/Application";
import ProfileApplicationsList from "../../../challenge/view/ProfileApplicationsList";
import Loading from "../../../common/view/components/atoms/Loading";
import MaxWidth from "../../../common/view/components/atoms/MaxWidth";
import { useHeaderBackgroundStore } from "../../../common/view/store/headerBackgroundStore";
import { Developer } from "../../../developer/domain/Developer";
import DeveloperProfileApplications from "../../../developer/view/components/DeveloperProfileApplications";
import { Nonprofit } from "../../../nonprofit/domain/Nonprofit";
import { User } from "../../domain/User";
import { UserType } from "../../domain/UserType";
import ProfileBio from "./ProfileBio";
import ProfileHeader from "./ProfileHeader";

export interface Props {
  user: User;
  /**
   * Whether the user shown in this profile page is the one who has logged in
   */
  isLoggedIn: boolean;
  nonprofit: Nonprofit;
  developer: Developer;
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
        <ProfileBio user={user} />
        {user.type === UserType.DEV && (
          <DeveloperProfileApplications user={user} />
        )}
      </MaxWidth>
    </section>
  );
}
