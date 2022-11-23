import { ComponentStory, ComponentMeta } from '@storybook/react';

import HorizontalMenu from "./horizontalMenu";

export default {
  title: 'menu/HorizontalMenu',
  component: HorizontalMenu
} as ComponentMeta<typeof HorizontalMenu>;

const Template: ComponentStory<typeof HorizontalMenu> = () => <HorizontalMenu />;

export const HorizontalMenuExample = Template.bind({});