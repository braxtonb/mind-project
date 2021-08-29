import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutHeader from './AboutHeader';

describe('AboutHeader', () => {
  const title = 'About Mind';
  const subheader = 'Learn more about the site';

  it('should render AboutHeader', () => {
    render(<AboutHeader />);

    expect(screen.getByRole('heading')).toHaveTextContent(title);
    expect(screen.getByText(subheader)).toBeInTheDocument();
  });
});