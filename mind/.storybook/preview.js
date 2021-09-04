import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: "^(on|handle)[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
}

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  ),
];