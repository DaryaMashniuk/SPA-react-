import React, { memo} from "react";
import { Link } from "react-router-dom";

const UsersList = memo(({ users }) => {
  console.log(users);
  return users.map((user) => (
    <Link key={user.id} to={`/users/${user.id}`}>
      <div className="user">{user.name}</div>
    </Link>
  ));
});

export default UsersList;
