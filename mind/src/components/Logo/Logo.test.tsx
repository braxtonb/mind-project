import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  const logoText = 'Mind';

  it('should render Logo', () => {
    render(<Logo />);

    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/');
    expect(screen.getByRole('heading')).toHaveTextContent(logoText);
  });
});
