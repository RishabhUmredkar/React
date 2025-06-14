import { useState } from "react";
import "./mode.css";

let UseStateHookTask05 = () => {
    let [isDarkMode, setIsDarkMode] = useState(false);
    
    return(
    <>
    <div id = "mainBodyDarkLight" className = {isDarkMode ? "dark" : "light"}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <button onClick={()=>{
            setIsDarkMode(!isDarkMode)
        }}>{isDarkMode ? "Light" : "Dark"}</button>
    </div>
        
    </>       
    )
}

export default UseStateHookTask05;