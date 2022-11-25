import { ComponentStory, ComponentMeta } from '@storybook/react';

import Handpicked from "./handpicked";

export default {
  title: 'Cards/Handpicked',
  component: Handpicked
} as ComponentMeta<typeof Handpicked>;

const Template: ComponentStory<typeof Handpicked> = () => <Handpicked />;

export const HandpickedExample = Template.bind({});