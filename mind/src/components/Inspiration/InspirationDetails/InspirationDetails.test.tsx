import React from 'react';
import { render, screen } from '@testing-library/react';
import InspirationDetails from './InspirationDetails';
import { createFakeInspiration } from '../../../mocks/inspiration-mocks';

describe('InspirationDetails', () => {
  const inspiration = createFakeInspiration();

  it('should render InspirationDetails with name and creator name', () => {
    render(<InspirationDetails inspiration={inspiration} />);

    expect(screen.getByText(inspiration.name)).toBeInTheDocument();
    expect(screen.getByText(inspiration.creatorName)).toBeInTheDocument();
  });
});
