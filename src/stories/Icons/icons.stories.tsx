import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from './icons';

export default {
  title: 'Components/Icons',
  component: Icons,
  argTypes: {
    name: {control: {type: 'select', options: ["twitter", "house", "arrow", "bookmarks", "calendar", "comment", "date", "dots", "emoji", "explore", "gif", "graph", "heart", "img", "lists", "location", "message", "mode", "more", "notification", "profile", "retweet", "search", "share", "twitter"]}},
    size: {control: {type: 'select', options: ["small", "medium", "large"]}},
    color: {control: {type: 'select', options: ["dark", "light"]}},
  },
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args} />;

export const base = Template.bind({});
base.args = {
    name: 'twitter',
    color: "light",
    size: "small"
};