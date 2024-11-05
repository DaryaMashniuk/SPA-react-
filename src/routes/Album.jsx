import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Album.css";

const Album = React.memo(() => {
  const { albumPhotos, user, album } = useLoaderData();
  const [photos, setPhotos] = useState(albumPhotos);

  useEffect(() => {
    // Set photos on initial load
    setPhotos(albumPhotos);
  }, [albumPhotos]);

  return (
    <div className="album">
      <h3>Album: {album.title}</h3>
      <p>Created by: {user.name}</p>
      <div className="photos-container">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div className="photo-item" key={photo.id}>
              <p className="photo-title">{photo.title}</p>
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="photo-image"
                loading="lazy"
              />
            </div>
          ))
        ) : (
          <p>Loading photos...</p>
        )}
      </div>
    </div>
  );
});

export default Album;
