import classNames from "classnames";
import React from "react";
import SafeImage from "../../../common/view/components/atoms/SafeImage";
import Tag from "../../../common/view/components/atoms/Tag";
import { User } from "../../domain/User";
import { UserType } from "../../domain/UserType";

interface Props {
  user: User;
}

export default function ProfileHeader({ user }: Props) {
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
        <div className="flex-none">
          <Tag
            text={userTypeText}
            tagStyle={user.type === UserType.DEV ? "cta" : "brand"}
          />
        </div>
      </div>
    </div>
  );
}
