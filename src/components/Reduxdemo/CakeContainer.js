// import React from 'react'
// import {buycake} from '../Reduxdemo'
// import { connect } from 'react-redux'


// function CakeContainer(props) {
 
//   return (
//     <div><h2>CakeContainer </h2>
//     <h5>Number of Cakes  {props.numofCakes} </h5>
//     <button onClick={props.buycake}>Buy cake </button></div>
    
//   )

 
 
// }

// export default connect((state)=>{
//   return {
//     numofCakes:state.numofCakes
//   }},(dispatch)=>{
//     return {
//    buycake:()=>dispatch(buycake())
//   }
//    }
//  )(CakeContainer)