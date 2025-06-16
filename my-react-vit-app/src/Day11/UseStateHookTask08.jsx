import { useState } from "react"

let UseStateHookTask08 = () =>{
    let [state, setState] = useState("");
    
    return(
        <>
            <div>
                <button onClick={()=>{setState("red")}}>red</button>
                <button onClick={()=>{setState("yellow")}}>Yellow</button>
                <button onClick={()=>{setState("green")}}>green</button>
                <br></br><br/>
                <div className="box" style={{width : "200px", height : "200px", border : "1px solid",
                    backgroundColor : state, justifyContent : "flex", alignItems : "center" }}></div>
            </div>
        </>
    )
}

export default UseStateHookTask08;