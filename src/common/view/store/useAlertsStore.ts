import { atom, useRecoilState } from "recoil";
import { Alert, AlertType, IAlert } from "../view-models/Alert";

const alertsState = atom<Alert[]>({
  key: "alerts",
  default: [],
});

export function useAlertsStore() {
  const [alerts, setAlerts] = useRecoilState(alertsState);

  function removeAlert(id: number) {
    setAlerts((alerts) => {
      const index = alerts.findIndex((alert) => alert.id === id);
      if (index !== -1) {
        return [...alerts.slice(0, index), ...alerts.slice(index + 1)];
      }
      return alerts;
    });
  }

  function addAlert(alertData: IAlert) {
    const newAlert = new Alert(alertData);
    setAlerts([newAlert, ...alerts]);
    setTimeout(() => {
      removeAlert(newAlert.id);
    }, 14000);
  }

  function warningAlert(message: string) {
    addAlert({
      type: AlertType.WARNING,
      message,
    });
  }

  function errorAlert(message: string) {
    addAlert({
      type: AlertType.DANGER,
      message,
    });
  }

  function successAlert(message: string) {
    addAlert({
      type: AlertType.SUCCESS,
      message,
    });
  }

  return { alerts, warningAlert, successAlert, errorAlert, removeAlert };
}
