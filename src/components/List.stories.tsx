import { Meta, Story } from "@storybook/react";

import { List, Props } from "./List";

export default {
  component: List,
  title: 'src/compoents/List.tsx',
  includeStories: ['Default'],
} as Meta;

const Template: Story<Props> = args => <List {...args} />

export const Default = Template.bind({});
Default.args = {
  users: [
    {
      id: 1,
      name: 'ユーザA'
    },
    {
      id: 2,
      name: 'ユーザB'
    },
    {
      id: 3,
      name: 'ユーザC'
    }
  ]
}