import { v4 as uuidv4 } from 'uuid';
import NewForm from '../NewForm';
import InspirationClient from '../../../../clients/inspirations/inspirations.client';
import { AlertContextHooks } from '../../../../contexts/AlertContext';

import type { InspirationType } from '../../../../constants/types';

const { useAlertInspirationContext } = AlertContextHooks;

const NewFormContainer: React.FC = () => {
  const { alertDispatch } = useAlertInspirationContext();

  const _handleSubmit = async (values: InspirationType) => {
    try {
      alertDispatch.addInspirationLoading(values.name);

      // useMutation from react query here maybe
      const now = new Date().toUTCString();
      const inspiration = {
        ...values,
        id: uuidv4(),
        createdAt: now,
        updatedAt: now,
      };
      await InspirationClient.addInspiration(inspiration);

      setTimeout(() => {
        alertDispatch.addInspiration(values.name);
      }, 300);
    } catch (error) {
      alertDispatch.addInspirationError(values.name);

      throw error;
    }
  };

  return <NewForm isLoading={false} onSubmit={_handleSubmit} />;
};

export default NewFormContainer;
