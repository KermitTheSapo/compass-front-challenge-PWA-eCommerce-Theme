import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardShop from "./cardShop";

export default {
  title: 'menu/CardShop',
  component: CardShop
} as ComponentMeta<typeof CardShop>;

const Template: ComponentStory<typeof CardShop> = () => <CardShop />;

export const CardShopMenuExample = Template.bind({});