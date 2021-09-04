import React from 'react';
import { Story, Meta } from '@storybook/react';
import AlertSnackbar, { AlertSnackbarProps } from './AlertSnackbar';

export default {
  component: AlertSnackbar,
  title: 'AlertSnackbar',
} as Meta;

const Template: Story<AlertSnackbarProps> = (args) => (
  <AlertSnackbar {...args} />
);

export const AlertSnackbarLoading = Template.bind({});
AlertSnackbarLoading.args = {
  isSnackbarOpen: true,
  message: 'Adding inspiration...',
  severity: 'info',
};

export const AlertSnackbarSuccess = Template.bind({});
AlertSnackbarSuccess.args = {
  ...AlertSnackbarLoading.args,
  message: 'Added inspiration',
  severity: 'success',
};

export const AlertSnackbarError = Template.bind({});
AlertSnackbarError.args = {
  ...AlertSnackbarLoading.args,
  message: 'Unable to add inspiration',
  severity: 'error',
};
