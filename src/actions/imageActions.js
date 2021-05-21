import axios from "axios";
import { imageURL } from "../api";

// https://api.unsplash.com/search/photos?client_id=ogZkENP9SL09_2XsVBZBqQlu76jcH3ANN4BIexR4Vb0&query=wedding
// https://api.unsplash.com/search/photos?client_id=ogZkENP9SL09_2XsVBZBqQlu76jcH3ANN4BIexR4Vb0&query=wedding&per_page=10&page=1

// action creator
export const loadImages = (query, counter) => async (dispatch) => {
  // fetch with Axios
  const imgData = await axios.get(imageURL(query, counter));

  dispatch({
    type: "FETCH_IMG",
    payload: {
      randomImg: imgData.data.results,
    },
  });
};
