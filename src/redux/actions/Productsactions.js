
import { ActionsTypes } from "../types/Actiontype"
export const setproducts=(products)=>{
    return{
type:ActionsTypes.SET_PRODUCTS,
payload:products
    }
}
export const selectedproduct=(product)=>{
    return{
type:ActionsTypes.SELECTED_PRODUCT,
payload:product
    }
}
export const selectcategories=(category)=>{
    return{
type:ActionsTypes.CATEGORY_PRODUCTS,
payload:category
    }
}
export const  selectcategoryproduct=(categoryproduct)=>{
return{
    type:ActionsTypes.CATEGORY_PRODUCT,
    payload:categoryproduct
}
}
export const  listingallusers=(users)=>{
    return{
        type:ActionsTypes.All_USERS,
        payload:users
    }
    }