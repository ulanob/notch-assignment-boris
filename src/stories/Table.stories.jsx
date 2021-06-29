import React from 'react';

import { Table } from './Table';

export default {
  title: 'UI/Table',
  component: Table,
  argTypes: {}
};

const Template = (args) => <Table {...args} />;

export const MainTable = Template.bind({});