import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from "./checkbox";

export default {
  title: 'Elements/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = () => <Checkbox />;

export const CheckboxExample = Template.bind({});