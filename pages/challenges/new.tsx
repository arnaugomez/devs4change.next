import React from "react";
import MaxWidth from "../../src/common/view/components/atoms/MaxWidth";
import { useDeveloperRedirect } from "../../src/user/view/hooks/useDeveloperRedirect";

export default function NewChallenge() {
  useDeveloperRedirect();
  return (
    <section className="px-4">
      <MaxWidth>
        <h2>Create new challenge</h2>
      </MaxWidth>
    </section>
  );
}
