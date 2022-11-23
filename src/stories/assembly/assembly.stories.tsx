import { ComponentStory, ComponentMeta } from '@storybook/react';

import Assembly from "./assembly";

export default {
  title: 'Elements/Assembly',
  component: Assembly
} as ComponentMeta<typeof Assembly>;

const Template: ComponentStory<typeof Assembly> = () => <Assembly />;

export const AssemblyExample = Template.bind({});