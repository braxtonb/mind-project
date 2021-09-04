import React from 'react';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';
import Meta, { FullDemo } from './InspirationListContainer.stories';

const InspirationListContainer = composeStory(FullDemo, Meta);

describe('InspirationListContainer', () => {
  it('should render InspirationListContainer', () => {
    render(<InspirationListContainer />);
  });
});