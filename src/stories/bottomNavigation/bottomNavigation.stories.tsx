import { ComponentStory, ComponentMeta } from '@storybook/react';

import BottomNavigation from "./bottomNavigation";

export default {
  title: 'Header And Footers/BottomNavigation',
  component: BottomNavigation,
  argTypes: {
    background: { control: { type: 'select', options: ["#1B4B66", "#FFFFFF"] } },
    color: { control: { type: 'select', options: ["#1B4B66", "#FFFFFF"] } },
  },
} as ComponentMeta<typeof BottomNavigation>;

const Template: ComponentStory<typeof BottomNavigation> = (args) => <BottomNavigation {...args} />;

export const DarkExample = Template.bind({});
DarkExample.args = {
  background: "#1B4B66",
  color: "#FFFFFF",
};
export const WhiteExample = Template.bind({});
WhiteExample.args = {
  background: "#FFFFFF",
  color: "#1B4B66",
};