import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonsAndChips from "./buttonsAndChips";

export default {
  title: 'Elements/ButtonsAndChips',
  component: ButtonsAndChips,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: { type: 'select', options: ["#1B4B66", "#639599", "#F4F4F4",] } },
  }
} as ComponentMeta<typeof ButtonsAndChips>;

const Template: ComponentStory<typeof ButtonsAndChips> = (args) => <ButtonsAndChips {...args} />;

export const ButtonsAndChipsExample = Template.bind({});
ButtonsAndChipsExample.args = {
  label: 'Label',
  backgroundColor: "#1B4B66"
};
