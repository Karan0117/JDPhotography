import { combineReducers } from "redux";
import imageReducer from "./imageReducer";
import coutnerReducer from "./counterReducer";
import setPortfolioReducer from "./setPortfolioReducer";

// combining all the reducers in one
const rootReducers = combineReducers({
  imgWedding: imageReducer,
  counterValue: coutnerReducer,
  portfolio: setPortfolioReducer,
});

export default rootReducers;
