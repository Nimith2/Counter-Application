import React,{useState} from "react";
import "../Styling/style.css"
function Count(props){
    let [state,setState]=useState(1)
    let inc=()=>setState(state+1)
    let dec=()=>setState(state-1)
    let reset=()=>setState(0)

    return(
        <>
        <h1>Button Clicked {state} time</h1>
        
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={reset}>Reset</button>     
        </>
    )
}
export default Count