import { useState } from "react"

let UseStateHookTask09 = () =>{
    let [state, setState] = useState("HOME");
    
    return(
        <>
            <div>
                <button onClick={()=>{setState("Home")}}>Home</button>
                <button onClick={()=>{setState("Profile")}}>Profile</button>
                <button onClick={()=>{setState("Setting")}}>Setting</button>
                <br></br><br/>
                <div className="box">{state}</div>
            </div>
        </>
    )
}

export default UseStateHookTask09;