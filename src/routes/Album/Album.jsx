import React, { useCallback, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { fetchPhotos } from "../../utils/loadMorePhotos";
import debounce from "../../utils/debounce";
import styles from "./Album.module.css";

const Album = React.memo(() => {
  const { albumPhotos, user, album } = useLoaderData();
  const [photos, setPhotos] = useState(albumPhotos);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  const loadMorePhotos = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    try {
      const newPhotos = await fetchPhotos(params.id, currentPage + 1);
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
      setCurrentPage(currentPage + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [loading, currentPage, params.id]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 100) {
        loadMorePhotos();
      }
    };
    const debouncedScrollHandler = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedScrollHandler);
    return () => window.removeEventListener("scroll", debouncedScrollHandler);
  }, [loadMorePhotos]);

  return (
    <div className={styles.album}>
      <h2>Album: {album.title}</h2>
      <h3>Created by: {user.name}</h3>
      <div className={styles.photosContainer}>
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div className={styles.photoItem} key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} className={styles.photoImage} loading="lazy" />
              <p className={styles.photoTitle}>{photo.title}</p>
            </div>
          ))
        ) : (
          <p>Loading photos...</p>
        )}
      </div>
      {error && <p className={styles.errorMessage}>Failed to load more photos. Try again later.</p>}
    </div>
  );
});

export default Album;
