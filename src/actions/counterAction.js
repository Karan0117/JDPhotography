export const increaseCounter = () => (dispatch) => {
  dispatch({
    type: "INCREASE_VALUE",
    payload: 1,
  });
};

export const resetCounter = () => (dispatch) => {
  dispatch({
    type: "RESET_COUNTER",
  });
};
