import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import Meta, { DefaultUpdateForm as UpdateFormStory } from './UpdateForm.stories';
import { composeStory } from '@storybook/testing-react';

// reuse storybook for unit test
const UpdateForm = composeStory(UpdateFormStory, Meta);

class GetUpdateFormElements {
  public static getNameField() {
    return screen.getByRole('textbox', { name: /^name$/i });
  }
  public static getCreatorNameField() {
    return screen.getByRole('textbox', { name: /creator name/i });
  }
  public static getUrlField() {
    return screen.getByRole('textbox', { name: /site url/i });
  }
  public static getMediaTypeField() {
    return screen.getByRole('button', { name: /inspiration type/i });
  }
  public static getMediaUrlField() {
    return screen.getByRole('textbox', { name: /media url/i });
  }
  public static getDescriptionField() {
    return screen.getByRole('textbox', { name: /description/i });
  }
  public static getSaveButton() {
    return screen.getByRole('button', { name: /save/i });
  }
}

describe('UpdateForm', () => {
  const onSubmit = jest.fn().mockName('onSubmit');

  beforeEach(() => {
    onSubmit.mockClear();
  });

  it('should render', () => {
    render(<UpdateForm />);

    expect(GetUpdateFormElements.getNameField()).toBeInTheDocument();
    expect(GetUpdateFormElements.getCreatorNameField()).toBeInTheDocument();
    expect(GetUpdateFormElements.getUrlField()).toBeInTheDocument();
    expect(GetUpdateFormElements.getMediaTypeField()).toBeInTheDocument();
    expect(GetUpdateFormElements.getMediaUrlField()).toBeInTheDocument();
    expect(GetUpdateFormElements.getDescriptionField()).toBeInTheDocument();
    expect(GetUpdateFormElements.getSaveButton()).toBeInTheDocument();
  });

  it('should render and submit', async () => {
    render(<UpdateForm onSubmit={onSubmit} />);

    await waitFor(async () => {
      fireEvent.click(GetUpdateFormElements.getSaveButton());
    });

    expect(onSubmit).toHaveBeenCalledWith(UpdateForm.args?.inspiration);
  });
});
