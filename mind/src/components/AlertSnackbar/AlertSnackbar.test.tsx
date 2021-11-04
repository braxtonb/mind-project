import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './AlertSnackbar.stories';

const { AlertSnackbarError, AlertSnackbarSuccess, AlertSnackbarLoading } =
  composeStories(stories);

describe('AlertSnackbar', () => {
  it('should render loading AlertSnackbar', () => {
    render(<AlertSnackbarLoading />);

    expect(
      screen.getByText(AlertSnackbarLoading.args?.message as string),
    ).toBeInTheDocument();
  });
  it('should render success AlertSnackbar', () => {
    render(<AlertSnackbarSuccess />);

    expect(
      screen.getByText(AlertSnackbarSuccess.args?.message as string),
    ).toBeInTheDocument();
  });
  it('should render error AlertSnackbar', () => {
    render(<AlertSnackbarError />);

    expect(
      screen.getByText(AlertSnackbarError.args?.message as string),
    ).toBeInTheDocument();
  });
});
