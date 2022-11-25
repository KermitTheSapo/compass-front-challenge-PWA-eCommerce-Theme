import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppBar } from "./appBar";

export default {
  title: 'Header And Footers/AppBar',
  component: AppBar,
  argTypes: {
    pageTitle: { control: 'text' },
    pageInfo: { control: 'text' },
    Search: { control: 'text' },
  },
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar  {...args} />;

export const appBarExample = Template.bind({});
appBarExample.args = {
  pageTitle: 'Page Title',
  pageInfo: "page Info",
  Search: "Search",
};
