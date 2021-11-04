import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NewForm from './NewForm';
import { createFakeInspiration } from '../../../mocks/inspiration-mocks';

class GetNewFormElements {
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

  public static getAddButton() {
    return screen.getByRole('button', { name: /add/i });
  }
}

describe('NewForm', () => {
  const onSubmit = jest.fn().mockName('onSubmit');

  beforeEach(() => {
    onSubmit.mockClear();
  });

  it('should render', () => {
    render(<NewForm onSubmit={onSubmit} />);

    expect(GetNewFormElements.getNameField()).toBeInTheDocument();
    expect(GetNewFormElements.getCreatorNameField()).toBeInTheDocument();
    expect(GetNewFormElements.getUrlField()).toBeInTheDocument();
    expect(GetNewFormElements.getMediaTypeField()).toBeInTheDocument();
    expect(GetNewFormElements.getMediaUrlField()).toBeInTheDocument();
    expect(GetNewFormElements.getDescriptionField()).toBeInTheDocument();
    expect(GetNewFormElements.getAddButton()).toBeInTheDocument();
  });

  it('should render and submit', async () => {
    const { id, createdAt, updatedAt, ...formValues } = createFakeInspiration();

    render(<NewForm onSubmit={onSubmit} />);

    // kent c dodds on fireEvent.change
    // https://github.com/testing-library/react-testing-library/issues/152#issuecomment-410865192
    await waitFor(async () => {
      fireEvent.change(GetNewFormElements.getNameField(), {
        target: { value: formValues.name },
      });
    });
    await waitFor(async () => {
      fireEvent.change(GetNewFormElements.getCreatorNameField(), {
        target: { value: formValues.creatorName },
      });
    });
    await waitFor(async () => {
      fireEvent.change(GetNewFormElements.getUrlField(), {
        target: { value: formValues.url },
      });
    });
    // media type field is defaulted to image, no need to initialize
    // await waitFor(async () => {
    //   fireEvent.change(GetNewFormElements.getMediaTypeField(), {
    //     target: { value: formValues.mediaType },
    //   });
    // });
    await waitFor(async () => {
      fireEvent.change(GetNewFormElements.getMediaUrlField(), {
        target: { value: formValues.mediaURL },
      });
    });
    await waitFor(async () => {
      fireEvent.change(GetNewFormElements.getDescriptionField(), {
        target: { value: formValues.description },
      });
    });
    await waitFor(async () => {
      fireEvent.click(GetNewFormElements.getAddButton());
    });

    expect(onSubmit).toHaveBeenCalledWith(formValues);
  });
});
