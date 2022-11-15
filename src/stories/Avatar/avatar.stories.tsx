import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from "./Avatar";

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    }
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};