import React, {useMemo , useEffect} from "react";
import { useLoaderData, Link} from "react-router-dom";
import AlbumList from "../components/AlbumList"
const Albums= React.memo(()=>{
  const { albums } = useLoaderData();
  useEffect(() => {
    document.title = "Albums";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="albums">
      <h3>Albums</h3>
      <AlbumList albums={albums}/>
    </div>
  );
})

export default Albums;


