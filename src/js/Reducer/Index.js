// import combined
import { combineReducers } from "redux";
// import created reducer
import listReducer from "./ListTask";

// create rootReducer
const rootReducer = combineReducers({listReducer});
export default rootReducer;