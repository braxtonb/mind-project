export const NAME_FIELD_LENGTHS = {
  MIN: {
    VALUE: 3,
    DEFAULT_VALIDATION_MEASAGE: 'Name must be at least 3 characters',
  },
  MAX: {
    VALUE: 64,
    DEFAULT_VALIDATION_MEASAGE: 'Name must be at most 64 characters',
  },
  BETWEEN: {
    DEFAULT_HINT_MESSAGE: 'Name must be between 3 and 64 characters',
  }
};

export const DESCRIPTION_FIELD_LENGTHS = {
  MIN: {
    VALUE: 3,
    DEFAULT_VALIDATION_MEASAGE: 'Description must be at least 3 characters',
  },
  MAX: {
    VALUE: 200,
    DEFAULT_VALIDATION_MEASAGE: 'Description must be at most 200 characters',
  },
  BETWEEN: {
    DEFAULT_HINT_MESSAGE: 'Description must be between 3 and 200 characters',
  }
};

export const LINK_FIELD_LENGTHS = {
  MIN: {
    VALUE: 3,
    DEFAULT_VALIDATION_MEASAGE: 'Link must be at least 3 characters',
  },
  MAX: {
    VALUE: 2048,
    DEFAULT_VALIDATION_MEASAGE: 'Link must be at most 2048 characters',
  },
  BETWEEN: {
    DEFAULT_HINT_MESSAGE: 'Link must be between 3 and 2048 characters',
  }
};
