import Link from "next/link";
import React from "react";
import SafeImage from "../../common/view/components/atoms/SafeImage";
import { Challenge } from "../domain/Challenge";

export default function ChallengeCard({
  name,
  intro,
  backgroundImage,
  developersAmount,
  slug,
  user,
}: Challenge) {
  return (
    <div className="flex items-stretch border border-gray-500 hover:border-black  rounded-br-3xl">
      <Link href={`/challenge/${slug}`} passHref>
        <a className="relative block flex-none w-40 border-r border-gray-600">
          <SafeImage
            layout="fill"
            objectFit="cover"
            src={backgroundImage}
            alt={`A picture of the challenge ${name} created by .`}
          />
        </a>
      </Link>
      <div className="flex-1 p-4 pb-5 pr-6 space-y-2">
        <h3 className="font-display font-bold text-2xl">
          <Link href={`/challenge/${slug}`}>{name}</Link>
        </h3>
        <p>{intro}</p>
        <div className="flex justify-between">
          <p className="text-xs text-gray-600">
            {developersAmount} developers needed
          </p>
          <p className="text-xs">
            By{" "}
            <Link passHref href={`/profile/${user.slug}`}>
              <a className="hover:underline">{user.displayName}</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
