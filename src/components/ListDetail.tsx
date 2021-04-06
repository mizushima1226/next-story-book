import * as React from 'react'

import { User } from '../interfaces'

export type Props = {
  user: User
}

export const ListDetail = (props: Props) => {
  const { user } = props;
  return (
    <div>
      <h1>Detail for {user.name}</h1>
      <p>ID: {user.id}</p>
    </div>
  );
}

