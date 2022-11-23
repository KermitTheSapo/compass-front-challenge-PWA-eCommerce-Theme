import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormControl from "./formControl";

export default {
  title: 'menu/FormControl',
  component: FormControl
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = () => <FormControl />;

export const FormControlExample = Template.bind({});