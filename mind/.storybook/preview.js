import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@material-ui/core/styles';
import { addDecorator } from '@storybook/react'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import theme from '../src/constants/theme';

initialize()
addDecorator(mswDecorator)

export const parameters = {
  actions: { argTypesRegex: '^(on|handle)[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
};

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </QueryClientProvider>
    </ThemeProvider>
  ),
];
