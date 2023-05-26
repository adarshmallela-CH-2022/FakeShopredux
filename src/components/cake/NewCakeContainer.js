// import React, { useState } from 'react'
// import { buycake } from './cakeAction'
// import { connect } from 'react-redux'

// function NewCakeContainer(props) {
//    const [number,setNumber]=useState(1)
//   return (
//     <div>NewCakeContainer
//     <h4>Numberof Cakes-{props.numofCakes}</h4>
//     <input type="number" onChange={(e)=>{setNumber(e.target.value)}}></input>
//     <button onClick={props.buycake}>Buy {number} Cake</button></div>
//   )
// }

// export default  connect((state)=>{
//     return {
//         numofCakes:state.numofCakes
//     }
// },dispatch=>{
//     return {
//         buycake:(number)=>dispatch(buycake(number))
//     }
// })(NewCakeContainer)