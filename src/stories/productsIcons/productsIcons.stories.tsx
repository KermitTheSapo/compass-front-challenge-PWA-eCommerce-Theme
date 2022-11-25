import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductIcons from "./productsIcons";

export default {
  title: 'icons/ProductIcons',
  component: ProductIcons
} as ComponentMeta<typeof ProductIcons>;

const Template: ComponentStory<typeof ProductIcons> = () => <ProductIcons />;

export const ProductIconsExample = Template.bind({});