import { Story, Meta } from "@storybook/react";

import { ListDetail, Props } from "./ListDetail";

export default {
  component: ListDetail,
  title: 'src/compoents/ListDetail.tsx',
  includeStories: ['Default'],
} as Meta;

const Template: Story<Props> = (args) => <ListDetail {...args} />

export const Default = Template.bind({});
Default.args = {
  user: {
    id: 1,
    name: 'ユーザA'
  }
}
