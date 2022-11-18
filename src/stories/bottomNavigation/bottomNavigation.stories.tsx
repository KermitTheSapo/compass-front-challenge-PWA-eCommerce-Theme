import { ComponentStory, ComponentMeta } from '@storybook/react';

import BottomNavigation from "./bottomNavigation";

export default {
  title: 'HeaderAndFooters/BottomNavigation',
  component: BottomNavigation
} as ComponentMeta<typeof BottomNavigation>;

const Template: ComponentStory<typeof BottomNavigation> = () => <BottomNavigation />;

export const BottomNavigationExample = Template.bind({});