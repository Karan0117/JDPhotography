const baseURL = "https://api.unsplash.com/";

// INSERT YOUR API_KEY HERE
const API_KEY = "";

export const imageURL = (query, counter) =>
  `${baseURL}/search/photos?client_id=${API_KEY}&query=${query}&per_page=${
    counter * 12
  }&page=1`;
