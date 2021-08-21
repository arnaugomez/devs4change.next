import React, { useCallback, useEffect, useState } from "react";
import { getApplicationsOfUser } from "../../../challenge/data/applicationRepository";
import { Application } from "../../../challenge/domain/Application";
import ProfileApplicationsList from "../../../challenge/view/ProfileApplicationsList";
import Loading from "../../../common/view/components/atoms/Loading";
import { User } from "../../../user/domain/User";
interface Props {
  user: User;
}

export default function DeveloperProfileApplications({ user }: Props) {
  const [applications, setApplications] = useState<Application[]>(null);
  
  const reloadApplications = useCallback(
    async function () {
      setApplications(await getApplicationsOfUser(user));
    },
    [setApplications, user]
  );

  useEffect(() => {
    reloadApplications();
  }, [reloadApplications]);

  if (!applications) {
    return <Loading />;
  }
  return <ProfileApplicationsList user={user} applications={applications} />;
}
