import { useState, useEffect } from 'react';
import AlertSnackbar from '../AlertSnackbar';
import { useAlertContext } from '../../../contexts/AlertContext/AlertContext.hooks';

const INITIAL_IS_SNACKBAR_OPEN = false;

const AlertSnackbarContainer: React.FC = () => {
  const {
    alertState: { alert },
  } = useAlertContext();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(
    INITIAL_IS_SNACKBAR_OPEN,
  );
  const [initialAlertId] = useState<number>(alert.id);

  /**
   * Effects
   */
  useEffect(() => {
    if (initialAlertId !== alert.id) {
      setIsSnackbarOpen(true);
    }
  }, [alert.id, initialAlertId]);

  /**
   * Handlers
   */
  const _handleSnackbarClose = (_: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackbarOpen(false);
  };

  return (
    <AlertSnackbar
      handleSnackbarClose={_handleSnackbarClose}
      isSnackbarOpen={isSnackbarOpen}
      message={alert.message}
      severity={alert.severity}
    />
  );
};

export default AlertSnackbarContainer;
