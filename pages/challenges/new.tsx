import React from "react";
import ChallengeFormIntro from "../../src/challenge/view/ChallengeFormIntro";
import NewChallengeForm from "../../src/challenge/view/NewChallengeForm";
import MaxWidth from "../../src/common/view/components/atoms/MaxWidth";
import { useDeveloperRedirect } from "../../src/user/view/hooks/useDeveloperRedirect";

export default function NewChallenge() {
  useDeveloperRedirect();
  return (
    <section className="px-4 pt-12">
      <MaxWidth>
        <ChallengeFormIntro />
        <NewChallengeForm />
      </MaxWidth>
    </section>
  );
}
