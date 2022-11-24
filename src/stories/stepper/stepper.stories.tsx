import { ComponentStory, ComponentMeta } from '@storybook/react';

import Stepper from "./stepper";

export default {
  title: 'Elements/Stepper',
  component: Stepper
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = () => <Stepper />;

export const StepperExample = Template.bind({});