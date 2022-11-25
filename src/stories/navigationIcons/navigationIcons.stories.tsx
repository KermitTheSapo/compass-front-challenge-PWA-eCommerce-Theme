import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavigationIcons from "./navigationIcons";

export default {
  title: 'Icons/NavigationIcons',
  component: NavigationIcons,
} as ComponentMeta<typeof NavigationIcons>;

const Template: ComponentStory<typeof NavigationIcons> = () => <NavigationIcons />;

export const DarkExample = Template.bind({});