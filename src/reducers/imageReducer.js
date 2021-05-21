const initState = {
  wedding: [],
};

const imageReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_IMG":
      return { ...state, wedding: action.payload.randomImg };
    default:
      return { ...state };
  }
};

export default imageReducer;
