import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButtons from "./radioButtons";

export default {
  title: 'Elements/RadioButtons',
  component: RadioButtons
} as ComponentMeta<typeof RadioButtons>;

const Template: ComponentStory<typeof RadioButtons> = () => <RadioButtons />;

export const RadioButtonsExample = Template.bind({});   