import React, { useEffect } from "react";
import { useUserStore } from "../store/userStore";

export default function GetPersistedUser({ children }) {
  const { getPersisted } = useUserStore();
  useEffect(() => {
    getPersisted();
  }, [getPersisted]);
  return children;
}
