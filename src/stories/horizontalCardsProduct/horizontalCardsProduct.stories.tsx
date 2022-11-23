import { ComponentStory, ComponentMeta } from '@storybook/react';

import HorizontalCardsProduct from "./horizontalCardsProduct";

export default {
  title: 'menu/HorizontalCardsProduct',
  component: HorizontalCardsProduct
} as ComponentMeta<typeof HorizontalCardsProduct>;

const Template: ComponentStory<typeof HorizontalCardsProduct> = () => <HorizontalCardsProduct />;

export const HorizontalCardsProductExample = Template.bind({});