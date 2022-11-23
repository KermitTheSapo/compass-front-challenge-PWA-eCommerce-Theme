import { ComponentStory, ComponentMeta } from '@storybook/react';

import Accordian from "./accordian";

export default {
  title: 'Elements/accordian',
  component: Accordian
} as ComponentMeta<typeof Accordian>;

const Template: ComponentStory<typeof Accordian> = () => <Accordian />;

export const AccordianExample = Template.bind({});