import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import InspirationList, { InspirationListProps } from './InspirationList';
import { createFakeInspiration } from '../../../mocks/inspiration';

describe('InspirationList', () => {
  const inspirations = [
    createFakeInspiration({ id: 1 }),
    createFakeInspiration({ id: 2 }),
    createFakeInspiration({ id: 3 }),
  ];
  const onPaginationChange = jest.fn().mockName('onPaginationChange');
  const onRemoveClick = jest.fn().mockName('onRemoveClick');
  const createTestCase = ({
    isLoading = false,
    isError = false,
    numberOfPages = 1,
    page = 0,
  }: Partial<InspirationListProps>): Required<InspirationListProps> => {
    return {
      isLoading,
      isError,
      inspirations,
      numberOfPages,
      page,
      onPaginationChange,
      onRemoveClick,
    };
  };

  beforeEach(() => {
    onPaginationChange.mockClear();
    onRemoveClick.mockClear();
  });

  it('should render InspirationList', () => {
    const testCase = createTestCase({});

    render(<InspirationList {...testCase} />, { wrapper: MemoryRouter });

    for (const inspiration of testCase.inspirations) {
      const div = screen.getByTestId(`inspiration-${inspiration.id}`);
      const link = div.querySelector('a');
      const img = screen.getByAltText(inspiration.name);
      const description = screen.getByText(inspiration?.description ?? '');

      expect(link).toHaveAttribute('href', inspiration.url);
      expect(screen.getByText(inspiration.name)).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(img).toHaveAttribute('src', inspiration.mediaURL);
    }
  });

  it('should change pages', () => {
    const testCase = createTestCase({ numberOfPages: 10 });

    render(<InspirationList {...testCase} />, { wrapper: MemoryRouter });

    fireEvent.click(screen.getByLabelText('Go to next page'));
    expect(onPaginationChange).toHaveBeenCalledTimes(1);
  });

  it('should remove inspiration', () => {
    const testCase = createTestCase({});

    render(<InspirationList {...testCase} />, { wrapper: MemoryRouter });

    const removeButton = screen.getAllByLabelText('remove inspiration')?.[0];
    fireEvent.click(removeButton);
    expect(onRemoveClick).toHaveBeenCalledTimes(1);
  });
});
