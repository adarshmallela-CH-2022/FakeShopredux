import {  createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger'
import { morereducers } from "./reducers";
 const store =createStore(morereducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 export default store;
