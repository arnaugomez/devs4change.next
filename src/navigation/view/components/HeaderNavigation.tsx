import Link from "next/link";
import React from "react";
import Button from "../../../common/view/components/atoms/Button";
import SafeImage from "../../../common/view/components/atoms/SafeImage";
import { UserType } from "../../../user/domain/UserType";
import { useUserStore } from "../../../user/view/store/userStore";
import HeaderNavigationNonprofit from "./HeaderNavigationNonprofit";

export default function HeaderNavigation() {
  const { user, logout } = useUserStore();
  if (!user) {
    return (
      <nav className="flex items-stretch space-x-3">
        <Link href="/login" passHref>
          <Button isLink color="black">
            Log in
          </Button>
        </Link>
        <Link href="/join" passHref>
          <Button isLink color="cta">
            Join
          </Button>
        </Link>
      </nav>
    );
  }
  return (
    <nav className="flex items-stretch space-x-3">
      {user.type === UserType.NONPROFIT && <HeaderNavigationNonprofit />}
      <Button color="black" hasBorder={false} onClick={logout}>
        Log out
      </Button>
      <div className="flex items-center">
        <Link href="/profile" passHref>
          <a className="block h-9 w-9 rounded-full relative overflow-hidden border border-black">
            <SafeImage
              layout="fill"
              objectFit="cover"
              src={user.backgroundImage}
              alt={"Profile picture of " + user.displayName}
            />
          </a>
        </Link>
      </div>
    </nav>
  );
}
