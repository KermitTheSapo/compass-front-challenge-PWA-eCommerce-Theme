import { ComponentStory, ComponentMeta } from '@storybook/react';

import Ratings from "./ratings";

export default {
  title: 'Elements/Ratings',
  component: Ratings
} as ComponentMeta<typeof Ratings>;

const Template: ComponentStory<typeof Ratings> = () => <Ratings />;

export const RatingsExample = Template.bind({});