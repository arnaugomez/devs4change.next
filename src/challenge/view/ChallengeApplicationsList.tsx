import React from "react";
import { Application } from "../domain/Application";
import ChallengeApplicationCard from "./ChallengeApplicationCard";

interface Props {
  applications: Application[];
}

export default function ChallengeApplicationsList({ applications }: Props) {
  return (
    <section className="pt-16">
      <h3 className="font-display font-bold pb-6 text-3xl">
        Developers who applied to this challenge
      </h3>
      {!applications.length && (
        <div className="flex justify-center items-center h-40">
          <p className="text-sm text-gray-500">0 developers have applied to this challenge</p>
        </div>
      )}
      <ul className="flex flex-wrap items-stretch gap-4">
        {applications.map((a) => (
          <li key={a.id}>
            <ChallengeApplicationCard application={a} />
          </li>
        ))}
      </ul>
    </section>
  );
}
