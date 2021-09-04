import React from 'react';
import { Story, Meta } from '@storybook/react';
import InspirationList, { InspirationListProps } from './InspirationList';
import { createFakeInspiration } from '../../../mocks/inspiration';

import type { InspirationType } from '../../../constants/types';

export default {
  component: InspirationList,
  title: 'Inspiration List',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<InspirationListProps> = (args) => (
  <InspirationList {...args} />
);

const getInspirations = (): InspirationType[] => [
  createFakeInspiration({ id: 1 }),
  createFakeInspiration({ id: 2 }),
  createFakeInspiration({ id: 3 }),
  createFakeInspiration({ id: 3 }),
];

export const DefaultList = Template.bind({});
DefaultList.args = {
  inspirations: getInspirations(),
  numberOfPages: 1,
  page: 1,
};

export const MultiplePagesList = Template.bind({});
MultiplePagesList.args = {
  inspirations: [...getInspirations(), ...getInspirations()],
  numberOfPages: 3,
  page: 1,
};

export const LoadingList = Template.bind({});
LoadingList.args = {
  ...DefaultList.args,
  isLoading: true,
};

export const ErrorList = Template.bind({});
ErrorList.args = {
  ...DefaultList.args,
  isError: true,
};