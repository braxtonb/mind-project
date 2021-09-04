import React from 'react';
import { Story, Meta } from '@storybook/react';
import Header, { HeaderProps } from './Header';

export default {
  component: Header,
  title: 'Components/Header',
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const HeaderWithoutSubtitle = Template.bind({});
HeaderWithoutSubtitle.args = {
  title: 'My Awesome Header',
};

export const HeaderWithSubtitle = Template.bind({});
HeaderWithSubtitle.args = {
  ...HeaderWithoutSubtitle.args,
  subheader: 'The best subheader',
};