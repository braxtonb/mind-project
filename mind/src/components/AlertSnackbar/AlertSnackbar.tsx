import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert';

// https://material-ui.com/guides/composition/#caveat-with-refs
// https://reactjs.org/docs/react-api.html#reactforwardref
// https://stackoverflow.com/a/62948993
const Alert = React.forwardRef((props: AlertProps, ref) => {
  return <MuiAlert ref={ref} elevation={6} variant="filled" {...props} />;
});

interface AlertSnackbarProps {
  handleSnackbarClose: (_: React.SyntheticEvent, reason?: string) => void;
  isSnackbarOpen: boolean;
  message: string;
  severity: string;
}

const AlertSnackbar: React.FC<AlertSnackbarProps> = ({
  handleSnackbarClose,
  isSnackbarOpen,
  message,
  severity,
}) => {
  return (
    <div>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
      >
        <Alert onClose={handleSnackbarClose} severity={severity as Color}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertSnackbar;
