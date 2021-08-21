import React from "react";
import { Application } from "../domain/Application";
import Link from "next/link";
import ProfileApplicationCard from "./ProfileApplicationCard";
import { User } from "../../user/domain/User";

interface Props {
  user: User;
  applications: Application[];
}

export default function ProfileApplicationsList({ applications, user }: Props) {
  return (
    <section className="pt-16">
      <h3 className="font-display font-bold pb-6 text-3xl">
        Challenges {user.displayName} applied to
      </h3>
      {!applications.length && (
        <div className="flex justify-center items-center h-40">
          <p className="text-sm text-gray-500 text-center">
            {user.displayName} still hasn&apos;t applied to any challenge. :(
            <br />
            <span className="underline">
            <Link href="/challenges">Find a challenge</Link></span>
          </p>
        </div>
      )}
      <ul className="flex flex-wrap items-stretch gap-4">
        {applications.map((a) => (
          <li key={a.id}>
            <ProfileApplicationCard application={a} />
          </li>
        ))}
      </ul>
    </section>
  );
}
