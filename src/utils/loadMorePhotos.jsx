import { BASEURL, PER_PAGE } from "./CONSTANTS";


export const fetchPhotos = async (id, page = 1, per_page = PER_PAGE) => {
    const apiUrl = new URL(`${BASEURL}photos?albumId=${id}`);
    apiUrl.search = `_page=${page}&_limit=${per_page}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
    console.log(page);
    return data;
  };


