import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UpdateForm from '../UpdateForm';
import InspirationClient from '../../../../clients/inspirations/inspirations.client';
import { useInspirationById } from '../../../../clients/inspirations/inspirations.hooks';
import { AlertContextHooks } from '../../../../contexts/AlertContext';
// import Loader from '../../../Loader';
// import theme from '../../../../constants/theme';

import type { InspirationType } from '../../../../constants/types';

const { useAlertInspirationContext } = AlertContextHooks;

interface UpdateFormContainerProps {
  inspirationId: string;
}

const UpdateFormContainer: React.FC<UpdateFormContainerProps> = ({
  inspirationId,
}) => {
  const { alertDispatch } = useAlertInspirationContext();
  const { data, isLoading, isError } = useInspirationById(inspirationId);

  /**
   * Effects
   */
  useEffect(() => {
    if (isError) {
      alertDispatch.getInspirationByIdError();
    }
  }, [inspirationId, isError, alertDispatch]);

  const _handleSubmit = async (values: InspirationType) => {
    try {
      alertDispatch.updateInspirationLoading(values.name);

      // useMutation from react query here maybe
      const now = new Date().toUTCString();
      const inspiration = {
        ...values,
        updatedAt: now,
      };
      await InspirationClient.updateInspirationById(inspiration);

      setTimeout(() => {
        alertDispatch.updateInspiration(values.name);
      }, 300);
    } catch (error) {
      alertDispatch.updateInspirationError(values.name);

      throw error;
    }
  };

  if (isError) {
    return (
      <Grid container item spacing={3} justifyContent="center">
        <Typography align="center">
          Unable to retrieve inspiration. Please refresh your browser.
        </Typography>
      </Grid>
    );
  }

  if (!data) {
    return (
      <Grid container item spacing={3} justifyContent="center">
        <Typography align="center">Loading inspiration...</Typography>
      </Grid>
    );
  }

  return (
    <UpdateForm
      isLoading={isLoading}
      inspiration={data}
      onSubmit={_handleSubmit}
    />
  );
};

export default UpdateFormContainer;
