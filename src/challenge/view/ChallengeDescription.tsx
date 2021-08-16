import React from "react";
import FormattedMarkup from "../../common/view/components/atoms/FormattedMarkup";
import { Challenge } from "../domain/Challenge";

export default function ChallengeDescription({
  description = null,
}: Pick<Challenge, 'description'>) {
  return (
    description && (
      <div>
        <h2 className="text-2xl font-display font-bold">Description</h2>
        <FormattedMarkup markup={description} />
      </div>
    )
  );
}
