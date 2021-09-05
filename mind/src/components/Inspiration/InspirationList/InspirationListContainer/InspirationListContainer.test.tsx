import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { composeStory } from '@storybook/testing-react';
import Meta, { FullDemo } from './InspirationListContainer.stories';

const queryClient = new QueryClient();
const InspirationListContainer = composeStory(FullDemo, Meta);

describe('InspirationListContainer', () => {
  it('should render InspirationListContainer', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <InspirationListContainer />
      </QueryClientProvider>,
    );
  });
});
