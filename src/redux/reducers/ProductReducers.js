import { ActionsTypes } from "../types/Actiontype"
const initialState={
    products:[],
    categoryproduct:[]
}
const productreducer=(state=initialState,{type,payload})=>{
switch (type) {
    case ActionsTypes.SET_PRODUCTS:
        return {...state,products:payload};
    case ActionsTypes.CATEGORY_PRODUCTS:
        return {...state,category:payload};
    case ActionsTypes.CATEGORY_PRODUCT:
        return {...state,categoryproduct:payload}
       
    default:
        return state;
        
}
}
export default productreducer;