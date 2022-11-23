import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppBar } from "./appBar";

export default {
  title: 'HeaderAndFooters/AppBar',
  component: AppBar
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = () => <AppBar />;

export const appBarExample = Template.bind({});