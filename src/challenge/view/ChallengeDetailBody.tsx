import React from "react";
import Button from "../../common/view/components/atoms/Button";
import { Challenge } from "../domain/Challenge";
import ChallengeDescription from "./ChallengeDescription";

export default function ChallengeDetailBody({
  intro,
  result,
  description,
  duration,
  developersAmount,
  startDate,
}: Challenge) {
  return (
    <div className="pt-6">
      <div className="flex items-center justify-between">
        <p className={"font-display italic tracking-widest"}>{intro}</p>
        <Button>Join challenge</Button>
      </div>
      <h3 className="font-display font-bold text-xl pt-8 pb-1">
        We need you to create...
      </h3>
      <p>{result}</p>
      <div className="flex">
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
