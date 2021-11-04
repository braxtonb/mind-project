import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Header.stories';

const { HeaderWithSubtitle, HeaderWithoutSubtitle } = composeStories(stories);

describe('Header', () => {
  it('should render Header with title and subheader', () => {
    render(<HeaderWithSubtitle />);

    expect(screen.getByRole('heading')).toHaveTextContent(
      HeaderWithSubtitle.args?.title as string,
    );
    expect(
      screen.getByText(HeaderWithSubtitle.args?.subheader as string),
    ).toBeInTheDocument();
  });

  it('should render Header only title', () => {
    render(<HeaderWithoutSubtitle />);

    expect(screen.getByRole('heading')).toHaveTextContent(
      HeaderWithoutSubtitle.args?.title as string,
    );
    expect(
      screen.queryByText(HeaderWithSubtitle.args?.subheader as string),
    ).not.toBeInTheDocument();
  });
});
