import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

export type Props = {
  user: User
}

export const ListItem = (props: Props) => {
  const { user } = props;
  return (
    <Link href="/users/[id]" as={`/users/${user.id}`}>
      <a>
        {user.id}: {user.name}
      </a>
    </Link>
  )
}
