const initState = {
  images: [],
};

const imageReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_IMG":
      return { ...state, images: action.payload.randomImg };
    default:
      return { ...state };
  }
};

export default imageReducer;
