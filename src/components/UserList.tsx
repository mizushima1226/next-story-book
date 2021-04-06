import { User } from "../interfaces";

export type Props = {
  users: Array<User>;
  loading: boolean;
  error: boolean;
};

export const UserList = (props:Props) => {
  const { users, loading, error } = props;

  if(loading){
    return <div>loading...</div>;
  }
  if(error){
    return <div>error😭</div>;
  }
  
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>ID: {user.id} : Name: {user.name}</li>
        ))}
      </ul>
    </>
  )
}

