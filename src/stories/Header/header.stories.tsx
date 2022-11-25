import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { HeaderS } from "./header";

export default {
  title: 'Header And Footers/Header',
  component: HeaderS,
  decorators: [withRouter],
} as ComponentMeta<typeof HeaderS>;

const Template: ComponentStory<typeof HeaderS> = () => <HeaderS />;

export const HeaderMobileDesktop = Template.bind({});