import { ComponentStory, ComponentMeta } from '@storybook/react';

import SideNavigationMenu from "./sideNavigationMenu";

export default {
  title: 'Elements/SideNavigationMenu',
  component: SideNavigationMenu
} as ComponentMeta<typeof SideNavigationMenu>;

const Template: ComponentStory<typeof SideNavigationMenu> = () => <SideNavigationMenu />;

export const sideNavigationMenuExample = Template.bind({});