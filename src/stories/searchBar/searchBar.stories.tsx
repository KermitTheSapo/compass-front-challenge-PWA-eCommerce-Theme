import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from "./searchBar";

export default {
  title: 'Elements/SearchBar',
  component: SearchBar
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = () => <SearchBar />;

export const SearchBarExample = Template.bind({});