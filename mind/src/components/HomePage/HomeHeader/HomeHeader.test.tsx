import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeHeader from './HomeHeader';

describe('HomeHeader', () => {
  const title = 'All Inspirations';
  const subheader = 'Found these sites to be pretty cool';

  it('should render HomeHeader', () => {
    render(<HomeHeader />);

    expect(screen.getByRole('heading')).toHaveTextContent(title);
    expect(screen.getByText(subheader)).toBeInTheDocument();
  });
});
