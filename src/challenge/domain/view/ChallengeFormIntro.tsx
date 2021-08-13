import React from "react";

export default function ChallengeFormIntro() {
  return (
    <>
      <h2 className="text-5xl font-display font-bold pb-4">
        Launch a challenge
      </h2>
      <p>
        Challenges are the way to find developers that want to collaborate with
        your organization.
      </p>
      <ol className="pl-6 py-4 list-decimal">
        <li>Create a challenge</li>
        <li>Receive applications from developers</li>
        <li>
          Get to know applicants in the Chat and select the best suited for the
          project
        </li>
      </ol>
    </>
  );
}
