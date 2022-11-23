import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from "./typography";

export default {
  title: 'menu/Typography',
  component: Typography
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => <Typography />;

export const TypographyExample = Template.bind({});