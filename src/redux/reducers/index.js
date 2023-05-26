
import { combineReducers } from "redux";
import productreducer from "./ProductReducers";

export const morereducers=combineReducers({allProducts:productreducer})