import React from 'react';
import { Story, Meta } from '@storybook/react';
import InspirationList, { InspirationListProps } from './InspirationList';
import { createFakeInspirationList } from '../../../mocks/inspiration-mocks';

export default {
  component: InspirationList,
  title: 'Inspiration List',
} as Meta;

const Template: Story<InspirationListProps> = (args) => (
  <InspirationList {...args} />
);

export const DefaultList = Template.bind({});
DefaultList.args = {
  inspirations: createFakeInspirationList(4),
  numberOfPages: 1,
  page: 1,
};

export const MultiplePagesList = Template.bind({});
MultiplePagesList.args = {
  inspirations: createFakeInspirationList(12),
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