// import createstore
import { createStore } from "redux";

// import rootReducer
import rootReducer from '../Reducer/Index';

// create store
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export
export default store;