import { ComponentStory, ComponentMeta } from '@storybook/react';

import HorizontalMenu from "./horizontalMenu";

export default {
  title: 'Elements/HorizontalMenu',
  component: HorizontalMenu,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: { type: 'select', options: ["#F1F1F1", "#FFFFFF"] } },
    colorLabel: { control: { type: 'select', options: ["#626262", "#171520"] } },
  }
} as ComponentMeta<typeof HorizontalMenu>;

const Template: ComponentStory<typeof HorizontalMenu> = (args) => <HorizontalMenu {...args} />;

export const HorizontalMenuExample = Template.bind({});
HorizontalMenuExample.args = {
  label: 'Label',
  backgroundColor: "#F1F1F1",
  colorLabel: "#626262"
};
