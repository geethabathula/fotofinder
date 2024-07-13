import axios from "axios";
const baseURL = "https://api.unsplash.com/search/photos";

async function searchPhotos(term) {
  const accessKey = import.meta.env.VITE_REACT_APP_UNSPLASH_ACCESSKEY;

  const response = await axios.get(baseURL, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      cilent_id: accessKey,
      query: term,
    },
  });
  console.log(response.data.results);
  return response.data.results;
}
export default searchPhotos;
