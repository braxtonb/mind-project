import { INSPIRATION_MEDIA_TYPE } from '../constants/inspiration-contants';
import { InspirationType } from '../constants/types';

const defaultInspiration: InspirationType = {
  id: Date.now(),
  name: 'Name',
  creatorName: 'Creator',
  url: 'some-url',
  mediaType: INSPIRATION_MEDIA_TYPE.IMAGE,
  mediaURL: 'some-media-url',
  description: 'description',
  createdAt: Date.now(),
  updatedAt: Date.now(),
};

export const createInspiration = (inspiration: Partial<InspirationType> = {}) => {
  // If no name is explicitly provided, use the id to generate
  // unique names and descriptions across function calls
  if (!inspiration?.name) {
    inspiration.name = `Name ${inspiration.id ?? defaultInspiration.id}`;
  }
  if (!inspiration?.description) {
    inspiration.description = `Description ${inspiration.id ?? defaultInspiration.id}`;
  }

  return {
    ...defaultInspiration,
    ...inspiration,
  };
};
