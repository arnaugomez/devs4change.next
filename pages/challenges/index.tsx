import React from "react";
import { getLatestChallenges } from "../../src/challenge/data/challengeRepository";
import { Challenge } from "../../src/challenge/domain/Challenge";

interface Payload {
  challenges: Challenge[];
}

export async function getServerSideProps() {
  const challenges = await getLatestChallenges();
  if (!challenges) {
    return { notFound: true };
  }

  for (const challenge of challenges) {
    challenge.startDate = challenge.startDate.toString();
  }

  return { props: { challenges } };
}

export default function Challenges({ challenges }: Payload) {
  // for (const challenge of challenges) {
  //   challenge.startDate = new Date(challenge.startDate);
  // }
  return JSON.stringify(challenges)
}
