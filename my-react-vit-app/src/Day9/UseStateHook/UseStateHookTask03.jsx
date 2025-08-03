import {Fragment, useState } from "react"

let UseStateHookTask03 = ()=>{
    let [count, setCount] = useState(0);

    return(
        <Fragment>
            <h1>{count}</h1>      
            <button onClick={()=>{
                setCount(count + 1);
                // This will re-render the component, so the displayed count will change
            }}>➕</button>

            <button onClick={()=>{
                setCount(count - 1);
                // This will re-render the component, so the displayed count will change
            }}>➖</button>

            <button onClick={()=>{
                setCount(0);
                // This will re-render the component, so the displayed count will change
            }}>Reset</button>
        </Fragment>
    )
}

export default UseStateHookTask03;