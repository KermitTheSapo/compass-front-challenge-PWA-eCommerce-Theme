import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from "./footer";

export default {
  title: 'HeaderAndFooters/FooterWeb',
  component: Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const FooterMobileWeb = Template.bind({});