import React from 'react';

import type { AlertContextType } from '../../constants/types';
import { INITIAL_ALERT_STATE } from './AlertContext.reducer';

const initialContext: AlertContextType = {
  alertState: INITIAL_ALERT_STATE,
  alertDispatch: () => {},
};

const AlertContext = React.createContext(initialContext);

export default AlertContext;