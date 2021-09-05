import faker from 'faker';
import { INSPIRATION_MEDIA_TYPE } from '../constants/inspiration-contants';
import { InspirationType } from '../constants/types';

const _createDefaultFakeInspiration = (): InspirationType => {
  return {
    id: Date.now(),
    name: faker.random.words(3),
    creatorName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    url: 'some-url',
    mediaType: INSPIRATION_MEDIA_TYPE.IMAGE,
    mediaURL: `${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`,
    description: faker.random.words(4),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
};

export const createFakeInspiration = (
  inspiration: Partial<InspirationType> = {},
): InspirationType => {
  return {
    ..._createDefaultFakeInspiration(),
    ...inspiration,
  };
};

export const createFakeInspirationList = (length = 20): InspirationType[] => {
  return new Array(length)
    .fill(null)
    .map((_, id) => createFakeInspiration({ id: id + 1 }));
};
