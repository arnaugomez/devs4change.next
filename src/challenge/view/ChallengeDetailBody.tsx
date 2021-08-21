import React from "react";
import Button from "../../common/view/components/atoms/Button";
import { useModalStore } from "../../common/view/store/modalStore";
import { Challenge } from "../domain/Challenge";
import ChallengeDescription from "./ChallengeDescription";
import ModalApplication from "./ModalApplication";

interface Props {
  challenge: Challenge,
  reloadApplications: Function
}

export default function ChallengeDetailBody({challenge, reloadApplications}: Props) {
  const {
    intro,
    result,
    description,
    duration,
    developersAmount,
    startDate,
    name,
  } = challenge;
  const { setModal } = useModalStore();
  return (
    <div className="pt-6">
      <div className="flex items-center justify-between">
        <p className={"font-display italic tracking-widest"}>{intro}</p>
        <Button
          onClick={() =>
            setModal({
              title: "Apply to challenge " + name,
              content: <ModalApplication challenge={challenge} reloadApplications={reloadApplications} />,
            })
          }
        >
          Join challenge
        </Button>
      </div>
      <h3 className="font-display font-bold text-xl pt-8 pb-1">
        We need you to create...
      </h3>
      <p>{result}</p>
      <div className="flex pb-8">
        <div className="flex-1">
          <h3 className="font-display font-bold text-xl pt-8 pb-1">
            Start date
          </h3>
          <p>{startDate.toLocaleString()}</p>
        </div>
        <div className="flex-1">
          <h3 className="font-display font-bold text-xl pt-8 pb-1">
            Expected duration
          </h3>
          <p>{duration}</p>
        </div>
        <div className="flex-1">
          <h3 className="font-display font-bold text-xl pt-8 pb-1">
            Developers needed
          </h3>
          <p>{developersAmount}</p>
        </div>
      </div>
      <ChallengeDescription description={description} />
    </div>
  );
}
