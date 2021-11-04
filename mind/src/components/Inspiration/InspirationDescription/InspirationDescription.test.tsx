import React from 'react';
import { render, screen } from '@testing-library/react';
import InspirationDescription from './InspirationDescription';

describe('InspirationDescription', () => {
  const description = 'Inspiration description';

  it('should render InspirationDescription with description', () => {
    render(<InspirationDescription description={description} />);

    expect(screen.getByRole('heading')).toHaveTextContent(description);
  });
});
