import { useState } from "react";
import "./like.css";

let UseStateHookTask06 = () => {
    let [likeCount , setLikeCount] = useState(0);
    return (
        <>
            <div style={
                {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }
            }>
                <div style={
                    {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        border: "1px solid"
                    }
                }

                className={likeCount ? "liked" : ""}
                onClick={()=>{setLikeCount(1)}}
                onDoubleClick={()=>{setLikeCount(0)}}
                >
                    {likeCount}
                </div>


            </div>
        </>
    )
}
export default UseStateHookTask06;