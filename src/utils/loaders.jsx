import { BASEURL , PER_PAGE} from "./CONSTANTS.JS";

export const albumsLoader = async () => {
  const albums =await fetch(`${BASEURL}albums`).then((responce) => responce.json());
  return { albums };
};

export const albumLoader = async ({ params: { id } }) => {
  const apiUrl = new URL(`${BASEURL}photos?albumId=${id}`);
  apiUrl.search = `_page=1&_limit=${PER_PAGE}`;
  const [albumPhotos, album] = await Promise.all([
    fetch(apiUrl).then((response) => response.json()),
    fetch(`${BASEURL}albums/${id}`).then((response) => response.json()),
  ]);
  const user =await fetch(`${BASEURL}users/${album.userId}`).then((response) => response.json())
  return { albumPhotos, album, user };
};


export const userLoader = async ({ params: { id } }) => {
  const user = await fetch(`${BASEURL}users/${id}`).then((responce) => responce.json());
  const albums = await fetch(`${BASEURL}albums?userId=${id}`).then((responce) => responce.json());
  return { user, albums };
};

export const usersLoader = async () => {
  const res = await fetch(`${BASEURL}users`);
  const users = await res.json();
  return { users };
};
