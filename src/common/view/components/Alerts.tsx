import React from "react";
import { useAlertsStore } from "../store/useAlertsStore";
import AlertToaster from "./AlertToaster";

export default function Alerts() {
  const { alerts, removeAlert } = useAlertsStore();
  return (
    <div className="py-4 px-1">
      <ul className="m-auto space-y-2 max-w-screen-md">
        {alerts.map((alert) => (
          <li key={alert.id}>
            <AlertToaster {...alert} onClose={() => removeAlert(alert.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
