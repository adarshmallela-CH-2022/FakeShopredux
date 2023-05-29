import React from 'react'
import { ActionsTypes } from '../types/Actiontype'
const initialState={
    users:[]
}
function UserReducer(state=initialState,{type,payload}) {
    switch(type){
        case ActionsTypes.All_USERS:
            return{...state,users:payload}
        default :
            return state
        
    }
  
}

export default UserReducer