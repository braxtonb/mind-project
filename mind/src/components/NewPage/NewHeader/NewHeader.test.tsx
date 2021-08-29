import React from 'react';
import { render, screen } from '@testing-library/react';
import NewHeader from './NewHeader';

describe('NewHeader', () => {
  const title = 'Add an inspiration';
  const subheader = 'Anything can be inspirational';

  it('should render NewHeader', () => {
    render(<NewHeader />);

    expect(screen.getByRole('heading')).toHaveTextContent(title);
    expect(screen.getByText(subheader)).toBeInTheDocument();
  });
});
