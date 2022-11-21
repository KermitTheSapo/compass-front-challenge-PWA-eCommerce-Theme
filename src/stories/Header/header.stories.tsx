import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderS } from "./header";

export default {
  title: 'HeaderAndFooters/Header',
  component: HeaderS
} as ComponentMeta<typeof HeaderS>;

const Template: ComponentStory<typeof HeaderS> = () => <HeaderS />;

export const HeaderMobileDesktop = Template.bind({});