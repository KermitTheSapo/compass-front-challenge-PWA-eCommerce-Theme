import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from "./header";

export default {
  title: 'HeaderAndFooters/Header',
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const HeaderMobileDesktop = Template.bind({});