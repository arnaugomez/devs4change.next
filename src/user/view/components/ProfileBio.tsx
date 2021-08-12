import React from "react";
import FormattedMarkup from "../../../common/view/components/atoms/FormattedMarkup";
import { User } from "../../domain/User";

interface Props {
  user: User;
}

export default function ProfileBio({ user }: Props) {
  return user.bio ? (
    <div>
      <h2 className="text-2xl font-display font-bold">Bio</h2>
      <FormattedMarkup markup={user.bio} />
    </div>
  ) : null;
}
