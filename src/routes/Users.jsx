import React , {useMemo} from "react";
import { Link,useLoaderData } from "react-router-dom";


const  Users = React.memo(()=> {
  const {users} = useLoaderData();

  const userList = useMemo(()=>{
    return users.map((user)=> (
      <Link key={user.id} to={`/users/${user.id}`}>
          <div className="user">{user.name}</div>
        </Link>
    ))
  },[users])
  return (
    <div>
      <h3>Users</h3>
      {userList}
    </div>
  );
})

export default Users;
