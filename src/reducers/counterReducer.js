const initState = {
  counter: 1,
};

const coutnerReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREASE_VALUE":
      return { ...state, counter: state.counter + action.payload };
    case "RESET_COUNTER":
      return { ...state, counter: 1 };
    default:
      return { ...state };
  }
};

export default coutnerReducer;
