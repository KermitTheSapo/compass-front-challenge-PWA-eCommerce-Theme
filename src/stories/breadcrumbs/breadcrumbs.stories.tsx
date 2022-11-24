import { ComponentStory, ComponentMeta } from '@storybook/react';

import BreadCrumbs from "./breadcrumbs";

export default {
  title: 'Elements/BreadCrumbs',
  component: BreadCrumbs,
  argTypes: {
    label: { control: 'text' },
    labelTwo: { control: 'text' },
    labelThree: { control: 'text' },
  }
} as ComponentMeta<typeof BreadCrumbs>;

const Template: ComponentStory<typeof BreadCrumbs> = (args) => <BreadCrumbs {...args} />;

export const BreadCrumbsExample = Template.bind({});
BreadCrumbsExample.args = {
  label: 'Label',
  labelTwo: "Label",
  labelThree: "label"
};