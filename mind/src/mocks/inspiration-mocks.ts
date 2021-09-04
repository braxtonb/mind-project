import faker from 'faker';
import { INSPIRATION_MEDIA_TYPE } from '../constants/inspiration-contants';
import { InspirationType } from '../constants/types';

const _createDefaultFakeInspiration = (): InspirationType => {
  return {
    id: Date.now(),
    name: faker.random.words(4),
    creatorName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    url: 'some-url',
    mediaType: INSPIRATION_MEDIA_TYPE.IMAGE,
    mediaURL: faker.image.nature(),
    description: faker.random.words(4),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}

export const createFakeInspiration = (inspiration: Partial<InspirationType> = {}) => {
  return {
    ..._createDefaultFakeInspiration(),
    ...inspiration,
  };
};
