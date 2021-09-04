import React from 'react';
import { Story, Meta } from '@storybook/react';
import Inspiration, { InspirationProps } from './Inspiration';
import { createFakeInspiration } from '../../mocks/inspiration';
import { INSPIRATION_MEDIA_TYPE } from '../../constants/inspiration-contants';

export default {
  component: Inspiration,
  title: 'Inspiration',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<InspirationProps> = (args) => (
  <Inspiration {...args} />
);

export const InspirationImage = Template.bind({});
InspirationImage.args = {
  inspiration: createFakeInspiration(),
};

export const InspirationVideo = Template.bind({});
InspirationVideo.args = {
  inspiration: createFakeInspiration({
    mediaType: INSPIRATION_MEDIA_TYPE.VIDEO,
    mediaURL:
      'https://cdn.dribbble.com/users/2380754/screenshots/10785054/media/e986a4cf256a036630210167cab830cd.mp4',
  }),
};