import React from "react";
import { getLatestChallenges } from "../../src/challenge/data/challengeRepository";
import { Challenge } from "../../src/challenge/domain/Challenge";
import ChallengesPageHeader from "../../src/challenge/view/ChallengesPageHeader";
import LatestChallenges from "../../src/challenge/view/LatestChallenges";
import MaxWidth from "../../src/common/view/components/atoms/MaxWidth";

interface Payload {
  challenges: Challenge[];
}

export async function getServerSideProps() {
  const challenges = await getLatestChallenges();
  if (!challenges) {
    return { notFound: true };
  }

  for (const challenge of challenges) {
    challenge.startDate = (challenge.startDate as Date).toISOString();
  }

  return { props: { challenges } };
}

export default function ChallengesPage({ challenges }: Payload) {
  for (const challenge of challenges) {
    challenge.startDate = new Date(challenge.startDate);
  }

  return (
    <section className="px-4 pt-12">
      <MaxWidth>
        <ChallengesPageHeader />
        <LatestChallenges challenges={challenges} />
      </MaxWidth>
    </section>
  );
}
