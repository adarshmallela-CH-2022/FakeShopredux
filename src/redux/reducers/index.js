
import { combineReducers } from "redux";
import productreducer from "./ProductReducers";
import UserReducer from "./UserReducer";
export const morereducers=combineReducers({allProducts:productreducer,allusers:UserReducer})