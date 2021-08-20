import Link from "next/link";
import React from "react";
import SafeImage from "../../common/view/components/atoms/SafeImage";
import { Challenge } from "../domain/Challenge";

export default function ChallengeDetailHeader({ name, user }: Challenge) {
  return (
    <div className="relative flex pt-32 pb-10 items-stretch justify-between">
      <h2 className="inline w-auto px-5 py-2 font-display font-bold text-4xl bg-white rounded-full">
        {name}
      </h2>
      <Link href={`/profile/${user.slug}`} passHref>
        <a className="flex items-center bg-white rounded-full pl-3 pr-4 py-2 space-x-3 border border-transparent hover:border-gray-600">
          <div className="block h-9 w-9 rounded-full relative overflow-hidden border border-black">
            <SafeImage
              layout="fill"
              objectFit="cover"
              src={user.photoURL}
              alt={"Profile picture of " + user.displayName}
            />
          </div>
          <div className="pt-0.5">
            <p className="text-xs text-gray-600 leading-none">Created by</p>
            <p className="font-display text-xl leading-tight">
              {user.displayName}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}
