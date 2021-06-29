import React from 'react';

import { Header } from './Header';

export default {
  title: 'UI/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

const Template = (args) => <Header {...args} />;

export const MainHeader = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
