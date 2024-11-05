export const albumsLoader = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await res.json();
    return { albums };
  } catch (error) {
    console.error(error);
    return { albums: [] };
  }
};

export const albumLoader = async ({ params: { id } }) => {
    try {
      const [albumPhotos, album] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`).then((res) => res.json()),
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`).then((res) => res.json()),
      ]);

      const user = await fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`).then((res) => res.json());
      
      return { albumPhotos, album, user };
    } catch (error) {
      console.error(error);
      return { albumPhotos: [], album: {}, user: {} };
    }
  };
  

export const userLoader = ({ params: { id } }) => {
  try {
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((responce) => responce.json());
    const albumsPromise = fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`).then((responce) =>
      responce.json()
    );
    return { userPromise, albumsPromise };
  } catch (error) {
    console.error(error);
    return { userPromise: [], albumsPromise: [] };
  }
};

export const usersLoader = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return { users };
  } catch (error) {
    console.error(error);
    return { users: [] };
  }
};
