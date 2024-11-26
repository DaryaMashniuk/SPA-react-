import React, { useMemo, useEffect } from "react";
import { Link, useLoaderData  } from "react-router-dom";
import UsersList  from "../components/UsersList.jsx";
const Users = React.memo(() => {
  const { users } = useLoaderData();
  useEffect(() => {
    document.title = "Users";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h3>Users</h3>
      <UsersList users={users}/>
    </div>
  );
});

export default Users;
