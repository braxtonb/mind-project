import React from 'react';
import { Story, Meta } from '@storybook/react';
import InspirationListContainer from './InspirationListContainer';
import { FakeInspirationRouter } from '../../../../mocks/server-mocks';

export default {
  component: InspirationListContainer,
  title: 'Inspiration List/Full Demo',
} as Meta;

const Template: Story = () => <InspirationListContainer />;

export const FullDemo = Template.bind({});

const fakeInspirationRouter = new FakeInspirationRouter();

FullDemo.parameters = {
  msw: [
    fakeInspirationRouter.createGetInspirationsRoute(),
    fakeInspirationRouter.createDeleteInspirationByIdRoute(),
  ],
};
