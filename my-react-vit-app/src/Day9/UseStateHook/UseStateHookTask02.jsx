import { useState } from "react";

let UseStateHookTask02 = ()=>{
   let count = 0;
   return(
    <>
        <h1>{count}</h1>
        <button onClick={()=>{
            count = count + 1;
            // This won't re-render the component, so the displayed count won't change
        }}>add</button>
    </>
   )
}

export default UseStateHookTask02;