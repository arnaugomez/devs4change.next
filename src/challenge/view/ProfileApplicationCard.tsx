import Link from "next/link";
import React from "react";
import { Application } from "../domain/Application";

interface Props {
  application: Application;
}

export default function ProfileApplicationCard({ application }: Props) {
  const { challenge, pitch, contribution } = application;
  return (
    <article className="px-3 py-4 border border-black h-full w-60 rounded-br-xl">
      <h4 className="font-display font-bold text-xl hover:underline">
        <Link href={`/challenge/${challenge.slug}`} passHref>
          <a>{challenge.name}</a>
        </Link>
      </h4>
      <h5 className="font-display font-bold uppercase text-xs tracking-widest pt-4 text-gray-600">Skills</h5>
      <p>{contribution}</p>
      <h5 className="font-display font-bold uppercase text-xs tracking-widest pt-4 text-gray-600">Pitch</h5>
      <p>{pitch}</p>
    </article>
  );
}
