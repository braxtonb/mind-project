import faker from 'faker';

import type { Alert } from '../constants/types';

const _createDefaultFakeAlert = (): Alert => {
  return {
    id: Date.now(),
    message: faker.random.words(4),
    severity: 'success',
  };
};

export const createFakeAlert = (alert: Partial<Alert> = {}) => {
  return {
    ..._createDefaultFakeAlert(),
    ...alert,
  };
};
