import React from 'react';
import { render, screen } from '@testing-library/react';
import UpdateHeader from './UpdateHeader';

describe('UpdateHeader', () => {
  const title = 'Update Inspiration';

  it('should render UpdateHeader', () => {
    render(<UpdateHeader />);

    expect(screen.getByRole('heading')).toHaveTextContent(title);
  });
});
