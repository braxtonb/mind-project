import React from 'react';
import { render, screen } from '@testing-library/react';
import InspirationDetails from './InspirationDetails';
import { createInspiration } from '../../../mocks/inspiration';

describe('InspirationDetails', () => {
  const inspiration = createInspiration();

  it('should render InspirationDetails with name and creator name', () => {
    render(<InspirationDetails inspiration={inspiration} />);

    expect(screen.getByText(inspiration.name)).toBeInTheDocument();
    expect(screen.getByText(inspiration.creatorName)).toBeInTheDocument();
  });
});