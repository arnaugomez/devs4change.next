import classNames from "classnames";
import React from "react";
import Link from "next/link";
import Button from "../../../common/view/components/atoms/Button";
import SafeImage from "../../../common/view/components/atoms/SafeImage";
import Tag from "../../../common/view/components/atoms/Tag";
import { User } from "../../domain/User";
import { UserType } from "../../domain/UserType";
interface Props {
  user: User;
  isPrivate: boolean;
}

export default function ProfileHeader({ user, isPrivate }: Props) {
  const userTypeText = user.type === UserType.DEV ? "developer" : "nonprofit";
  const placeholderIntroText = `I'm a ${userTypeText}`;
  const textColor =
    user.type === UserType.DEV ? "text-cta-800" : "text-brand-900";

  return (
    <div className="pt-40 flex space-x-2">
      <div className="h-44 w-44 rounded-full relative border-8 border-white overflow-hidden">
        <SafeImage
          layout="fill"
          objectFit="cover"
          src={user.photoURL}
          alt={`Foto de perfil de ${user.displayName}`}
        />
      </div>
      <div className="flex-1 pt-16 flex">
        <div className="flex-1">
          <h2 className="font-display text-3xl font-light">
            {user.displayName}
          </h2>
          <p
            className={classNames(
              "font-display italic tracking-widest",
              textColor
            )}
          >
            {user.intro ?? placeholderIntroText}
          </p>
        </div>
        <div className="flex-none flex flex-col gap-3">
          {isPrivate && (
            <Link href="/profile/edit" passHref>
              <Button
                color={user.type === UserType.DEV ? "cta" : "brand"}
                isLink
              >
                Edit profile
              </Button>
            </Link>
          )}
          <Tag
            text={userTypeText}
            tagStyle={user.type === UserType.DEV ? "cta" : "brand"}
          />
        </div>
      </div>
    </div>
  );
}
