import { ComponentStory, ComponentMeta } from '@storybook/react';

import HorizontalCards from "./horizontalCards";

export default {
  title: 'Cards/HorizontalCards',
  component: HorizontalCards
} as ComponentMeta<typeof HorizontalCards>;

const Template: ComponentStory<typeof HorizontalCards> = () => <HorizontalCards />;

export const HorizontalCardsExample = Template.bind({});