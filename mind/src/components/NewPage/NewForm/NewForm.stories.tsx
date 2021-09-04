import React from 'react';
import { Story, Meta } from '@storybook/react';
import NewForm, { NewFormProps } from './NewForm';

export default {
  component: NewForm,
  title: 'NewForm',
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 600 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<NewFormProps> = (args) => (
  <NewForm {...args} />
);

export const DefaultNewForm = Template.bind({});
DefaultNewForm.args = {
  isLoading: false,
};

export const LoadingNewForm = Template.bind({});
LoadingNewForm.args = {
  isLoading: true,
};