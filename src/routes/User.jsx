import React,{ Suspense} from "react";
import { Await, useLoaderData , Link } from "react-router-dom";


const User= React.memo(()=> {
  const { userPromise , albumsPromise } = useLoaderData();

  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Await resolve={userPromise} errorElement={<div>Error</div>}>
        {(user) => {
          return (
            <div className="user-info">
              <h3>{user.name}</h3>
              <div>UserName: {user.username}</div>
              <div>Email: {user.email}</div>
              <div>Phone: {user.phone}</div>
              <div>Website: {user.website}</div>
            </div>
          );
        }}
      </Await>
      <Await resolve={albumsPromise} errorElement={<div>Error loading albums</div>}>
        {(albums)=>
        <div className="user-albums">
          <h3>Albums</h3>
          {albums.map((album)=> (
          <Link to={`/albums/${album.id}` } key={album.id}>
            <div className="user-album">{album.title}</div>
          </Link>
        ))}
        </div>
          }
      </Await>
    </Suspense>
  );
})

export default User;
