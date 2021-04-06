import * as React from 'react'
import { ListItem } from './ListItem'
import { User } from '../interfaces'

export type Props = {
  users: User[]
}

export const List = (props: Props) => {
  const { users } = props;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <ListItem user={user} />
        </li>
      ))}
    </ul>
  )
}
