import React from "react";
import { Challenge } from "../domain/Challenge";
import ChallengeCard from "./ChallengeCard";

interface Props {
  challenges: Challenge[];
}

export default function LatestChallenges({ challenges }: Props) {
  return (
    <ul className="space-y-4">
      {challenges.map((challenge) => (
        <li key={challenge.id}>
          <ChallengeCard {...challenge} />
        </li>
      ))}
    </ul>
  );
}
