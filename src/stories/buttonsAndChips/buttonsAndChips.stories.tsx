import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonsAndChips from "./buttonsAndChips";

export default {
  title: 'Elements/ButtonsAndChips',
  component: ButtonsAndChips
} as ComponentMeta<typeof ButtonsAndChips>;

const Template: ComponentStory<typeof ButtonsAndChips> = () => <ButtonsAndChips />;

export const ButtonsAndChipsExample = Template.bind({});