import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  const title = 'My header title';
  const subheader = 'My subheader';

  it('should render Header with title and subheader', () => {
    render(<Header title={title} subheader={subheader} />);

    expect(screen.getByRole('heading')).toHaveTextContent(title);
    expect(screen.getByText(subheader)).toBeInTheDocument();
  });

  it('should render Header only title', () => {
    render(<Header title={title} />);

    expect(screen.getByRole('heading')).toHaveTextContent(title);
  });
});