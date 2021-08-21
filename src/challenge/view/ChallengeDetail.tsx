import React, { useCallback, useEffect, useState } from "react";
import MaxWidth from "../../common/view/components/atoms/MaxWidth";
import { useHeaderBackgroundStore } from "../../common/view/store/headerBackgroundStore";
import { Challenge } from "../domain/Challenge";
import ChallengeDetailBody from "./ChallengeDetailBody";
import ChallengeDetailHeader from "./ChallengeDetailHeader";
import { Application } from "../domain/Application";
import { getApplicationsOfChallenge } from "../data/applicationRepository";
import Loading from "../../common/view/components/atoms/Loading";
import ChallengeApplicationsList from "./ChallengeApplicationsList";

export default function ChallengeDetail(challenge: Challenge) {
  const [applications, setApplications] = useState<Application[]>(null);
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

  const reloadApplications = useCallback(
    async function () {
      setApplications(await getApplicationsOfChallenge(challenge));
    },
    [setApplications, challenge]
  );
  
  useEffect(() => {
    reloadApplications();
  }, [reloadApplications]);

  return (
    <section className="px-4">
      <MaxWidth>
        <ChallengeDetailHeader {...challenge} />
        <ChallengeDetailBody
          challenge={challenge}
          reloadApplications={reloadApplications}
        />
        {!applications ? (
          <Loading />
        ) : (
          <ChallengeApplicationsList applications={applications} />
        )}
      </MaxWidth>
    </section>
  );
}
