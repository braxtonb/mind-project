import React from 'react';
import { Story, Meta } from '@storybook/react';
import InspirationListContainer from './InspirationListContainer';
import { FakeInspirationRequest } from '../../../../mocks/server-mocks';

export default {
  component: InspirationListContainer,
  title: 'Inspiration List',
} as Meta;

const Template: Story = () => <InspirationListContainer />;

export const FullDemo = Template.bind({});
FullDemo.parameters = {
  msw: [
    FakeInspirationRequest.fakeGetInspirationsRequest(),
    FakeInspirationRequest.fakeRemoveInspirationByIdRequest(),
  ],
};
