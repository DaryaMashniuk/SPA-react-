import React, {useMemo} from "react";
import { useLoaderData, Link } from "react-router-dom";

const Albums= React.memo(()=>{
  const { albums } = useLoaderData();

  const albumsList = useMemo(()=> {
    return albums.map((album) => (
      <Link to={`/albums/${album.id}`} key={album.id}>
        <div className="album">{album.title}</div>
      </Link>
    ))
  },[albums])
  return (
    <div className="albums">
      <h3>Albums</h3>
      {albumsList}
    </div>
  );
})

export default Albums;


