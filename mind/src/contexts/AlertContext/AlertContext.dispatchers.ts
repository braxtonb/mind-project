import {
  SUCCESS__ALERT,
  ERROR__ALERT,
  LOADING__ALERT,
} from './AlertContext.types';

import type { AlertAction } from '../../constants/types';

export class AlertDispatcher {
  private alertDispatch: React.Dispatch<AlertAction>;

  constructor(alertDispatch: React.Dispatch<AlertAction>) {
    this.alertDispatch = alertDispatch;
  }

  public loading(message: string) {
    this.alertDispatch({
      type: LOADING__ALERT,
      payload: {
        id: +new Date(),
        message,
        severity: 'info',
      },
    });
  }

  public success(message: string) {
    this.alertDispatch({
      type: SUCCESS__ALERT,
      payload: {
        id: +new Date(),
        message,
        severity: 'success',
      },
    });
  }

  public error(message: string) {
    this.alertDispatch({
      type: ERROR__ALERT,
      payload: {
        id: +new Date(),
        message,
        severity: 'error',
      },
    });
  }
}

export class AlertInspirationDispatcher extends AlertDispatcher {
  public getInspirationsError() {
    this.error('Unable to retrieve inspirations');
  }

  public getInspirationByIdError() {
    this.error('Unable to retrieve inspiration by ID');
  }

  public addInspirationLoading(name: string) {
    this.loading(`Adding ${name}...`);
  }

  public addInspiration(name: string) {
    this.success(`Added ${name}`);
  }

  public addInspirationError(name: string) {
    this.error(`Unable to add ${name}`);
  }

  public updateInspirationLoading(name: string) {
    this.loading(`Updating ${name}...`);
  }

  public updateInspiration(name: string) {
    this.success(`Updated ${name}`);
  }

  public updateInspirationError(name: string) {
    this.error(`Unable to update ${name}`);
  }

  public removeInspirationLoading(name: string) {
    this.loading(`Removing ${name}...`);
  }

  public removeInspiration(name: string) {
    this.success(`Removed ${name}`);
  }

  public removeInspirationError(name: string) {
    this.error(`Unable to remove ${name}`);
  }
}
