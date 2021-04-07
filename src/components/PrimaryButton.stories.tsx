import { Meta, Story } from "@storybook/react";

import { PrimaryButton, Props } from "./PrimaryButton";

export default {
  component: PrimaryButton,
  title: 'src/compoents/PrimaryButton.tsx',
} as Meta;

const Template: Story<Props> = args => <PrimaryButton {...args} />

export const Default = Template.bind({});
Default.args = {
  children: "ボタン",
  loading: false,
  disabled: false
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true
}

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true
}