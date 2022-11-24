import { ComponentStory, ComponentMeta } from '@storybook/react';

import BannerBig from "./BannerBig";

export default {
  title: 'Elements/BannerBig',
  component: BannerBig
} as ComponentMeta<typeof BannerBig>;

const Template: ComponentStory<typeof BannerBig> = () => <BannerBig />;

export const BannerBigExample = Template.bind({});