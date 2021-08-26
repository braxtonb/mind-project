import {
  SUCCESS__ALERT,
  LOADING__ALERT,
  ERROR__ALERT,
} from './AlertContext.types';

import type { Alert, AlertAction, AlertState } from '../../constants/types';

export const INITIAL_ALERT_STATE: AlertState = {
  alert: {} as Alert,
};

const reducer = (state = INITIAL_ALERT_STATE, action: AlertAction) => {
  switch (action.type) {
    case LOADING__ALERT:
    case SUCCESS__ALERT:
    case ERROR__ALERT:
      return { ...state, alert: action.payload };
    default:
      return state;
  }
};

export default reducer;
