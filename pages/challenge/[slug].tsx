import React from "react";
import { getChallengeBySlug } from "../../src/challenge/data/challengeRepository";
import { Challenge } from "../../src/challenge/domain/Challenge";

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

  return { props: { challenge } };
}

export default function ChallengeSlug({ challenge }: Payload) {
  return <div></div>;
}
