import { useState } from "react";

let UseStateHookTask01 = () =>{
    let [count , setCount] = useState(0)

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>add</button>
        </div>
    )
}


export default UseStateHookTask01;