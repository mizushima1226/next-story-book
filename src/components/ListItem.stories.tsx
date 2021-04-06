import { Meta, Story } from "@storybook/react";

import { ListItem, Props } from "./ListItem";

export default {
  component: ListItem,
  title: 'src/compoents/ListItem.tsx',
  includeStories: ['Default'],
} as Meta;

const Template: Story<Props> = args => <ListItem {...args} />

export const Default = Template.bind({});
Default.args = {
  user: {
    id: 1,
    name: 'ユーザA'
  }
}