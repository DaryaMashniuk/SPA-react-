import React , {memo} from "react";
import { Link } from "react-router-dom";

const AlbumList = memo(({albums})=> {
    return albums.map((album) => (
      <Link to={`/albums/${album.id}`} key={album.id}>
        <div className="album">{album.title}</div>
      </Link>
    ))
  });

export default AlbumList;