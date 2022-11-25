import { ComponentStory, ComponentMeta } from '@storybook/react';

import GeneralIcons from "./generalIcons";

export default {
  title: 'icons/GeneralIcons',
  component: GeneralIcons
} as ComponentMeta<typeof GeneralIcons>;

const Template: ComponentStory<typeof GeneralIcons> = () => <GeneralIcons />;

export const GeneralIconsExample = Template.bind({});