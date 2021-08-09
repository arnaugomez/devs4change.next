import { ReactNode } from "react";

export enum AlertType {
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
}
export interface IAlert {
  type: AlertType;
  message: ReactNode;
}

export class Alert {
  private static idCounter: number = 1;
  readonly type: AlertType;
  readonly message: ReactNode;
  readonly id: number;
  constructor(alert: IAlert) {
    this.type = alert.type;
    this.message = alert.message;
    this.id = Alert.idCounter;
    Alert.idCounter++;
  }
}
