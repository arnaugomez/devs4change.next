import React, { useEffect } from "react";
import MaxWidth from "../../common/view/components/atoms/MaxWidth";
import { useHeaderBackgroundStore } from "../../common/view/store/headerBackgroundStore";
import { Challenge } from "../domain/Challenge";
import ChallengeDetailBody from "./ChallengeDetailBody";
import ChallengeDetailHeader from "./ChallengeDetailHeader";

export default function ChallengeDetail(challenge: Challenge) {
  const { backgroundImage, name } = challenge;
  const { setHeaderBackground, clearHeaderBackground } =
    useHeaderBackgroundStore();

  useEffect(() => {
    setHeaderBackground(
      backgroundImage && {
        src: backgroundImage,
        alt: `Background image of challenge ${name}`,
      }
    );
    return () => {
      clearHeaderBackground();
    };
  }, [name, backgroundImage, setHeaderBackground, clearHeaderBackground]);

  return (
    <section className="px-4">
      <MaxWidth>
        <ChallengeDetailHeader {...challenge} />
        <ChallengeDetailBody {...challenge} />
      </MaxWidth>
    </section>
  );
}
