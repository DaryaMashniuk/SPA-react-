import React, { Suspense, useEffect } from "react";
import { Await, useLoaderData, Link } from "react-router-dom";

const User = React.memo(() => {
  const { user, albums } = useLoaderData();

  useEffect(() => {
    document.title = "User";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="user-page">
      <div className="user-info">
        <h3>{user.name}</h3>
        <div>UserName: {user.username}</div>
        <div>Email: {user.email}</div>
        <div>Phone: {user.phone}</div>
        <div>Website: {user.website}</div>
      </div>
      <div className="user-albums">
        <h3>Albums</h3>
        {albums.map((album) => (
          <Link to={`/albums/${album.id}`} key={album.id}>
            <div className="user-album">{album.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
});

export default User;
