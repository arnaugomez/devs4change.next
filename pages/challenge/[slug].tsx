import React from "react";
import { getChallengeBySlug } from "../../src/challenge/data/challengeRepository";
import { Challenge } from "../../src/challenge/domain/Challenge";
import ChallengeDetail from "../../src/challenge/view/ChallengeDetail";

interface Context {
  params: {
    slug: string;
  };
}

interface Payload {
  challenge: Challenge;
}

export async function getServerSideProps({ params: { slug } }: Context) {
  const challenge = await getChallengeBySlug(slug);
  if (!challenge) {
    return { notFound: true };
  }

  challenge.startDate = challenge.startDate.toString();

  return { props: { challenge } };
}

export default function ChallengeSlug({ challenge }: Payload) {
  challenge.startDate = new Date(challenge.startDate);
  return <ChallengeDetail {...challenge} />;
}
