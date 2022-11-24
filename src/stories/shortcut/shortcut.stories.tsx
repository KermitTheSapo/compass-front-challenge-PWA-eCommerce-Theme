import { ComponentStory, ComponentMeta } from '@storybook/react';

import Shortcut from "./shortcut";

export default {
  title: 'Cards/Shortcut',
  component: Shortcut
} as ComponentMeta<typeof Shortcut>;

const Template: ComponentStory<typeof Shortcut> = () => <Shortcut />;

export const ShortcutExample = Template.bind({});