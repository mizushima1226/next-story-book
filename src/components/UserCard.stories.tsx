import { Meta } from "@storybook/react";

import { UserCard } from "./UserCard";

export default {
  component: UserCard,
  title: 'src/compoents/UserCard.tsx',
} as Meta;

export const Default = () => {
  return (
    <>
      <h3>Default</h3>
      <br />
      <UserCard image="https://pbs.twimg.com/profile_images/1253672798817357824/yRuVfwx__400x400.jpg" name="みずしま" />
      <br />
      <br />
      <h3>ログイン</h3>
      <UserCard image="https://pbs.twimg.com/profile_images/1253672798817357824/yRuVfwx__400x400.jpg" name="みずしま" login={true} />
      <br />
      <br />
      <h3>ログアウト</h3>
      <UserCard image="https://pbs.twimg.com/profile_images/1253672798817357824/yRuVfwx__400x400.jpg" name="みずしま" login={false} />
    </>
  )
}

export const NoImage = () => {
  return (
    <>
      <h3>画像なし名前あり</h3>
      <br />
      <UserCard image="" name="みずしま" />
      <br />
      <br />
      <h3>画像なし名前なし</h3>
      <br />
      <UserCard image="" name="" />
    </>
  )
}
