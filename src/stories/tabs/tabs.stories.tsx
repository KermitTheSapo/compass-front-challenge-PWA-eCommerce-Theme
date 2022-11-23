import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from "./tabs";

export default {
  title: 'menu/Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => <Tabs />;

export const TabsExample = Template.bind({});