import { Meta, Story } from "@storybook/react";

import { UserList, Props } from "./UserList";

export default {
  component: UserList,
  title: 'src/compoents/UserList.tsx',
  includeStories: ['Default','Loading', 'Error'],
} as Meta;

const Template: Story<Props> = args => <UserList {...args} />

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
    }
  ],
  loading: false,
  error: false
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
}
