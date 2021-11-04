import { useReducer } from 'react';
import { AlertContextType } from '../../constants/types';
import AlertSnackbar from '../../components/AlertSnackbar';
import AlertContext from './AlertContext.context';
import alertReducer, { INITIAL_ALERT_STATE } from './AlertContext.reducer';

interface AlertProviderProps {
  children: React.ReactNode;
}

const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [alertState, alertDispatch] = useReducer(
    alertReducer,
    INITIAL_ALERT_STATE,
  );
  const alertProviderValue: AlertContextType = {
    alertState,
    alertDispatch,
  };

  return (
    <AlertContext.Provider value={alertProviderValue}>
      {children}

      <AlertSnackbar />
    </AlertContext.Provider>
  );
};

export default AlertProvider;
