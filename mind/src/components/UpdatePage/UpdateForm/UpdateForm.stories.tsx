import React from 'react';
import { Story, Meta } from '@storybook/react';
import UpdateForm, { UpdateFormProps } from './UpdateForm';
import { createFakeInspiration } from '../../../mocks/inspiration-mocks';

export default {
  component: UpdateForm,
  title: 'UpdateForm',
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 600 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<UpdateFormProps> = (args) => (
  <UpdateForm {...args} />
);

export const DefaultUpdateForm = Template.bind({});
DefaultUpdateForm.args = {
  isLoading: false,
  inspiration: createFakeInspiration(),
};

export const LoadingUpdateForm = Template.bind({});
LoadingUpdateForm.args = {
  ...DefaultUpdateForm.args,
  isLoading: true,
};