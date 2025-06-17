import { useState } from "react";

let UseStateHookTask04 = () => {
    let [state, setState] = useState(false);
    return (
        // Add a button that show or hide a paragraph
        // label the button "Show" or "Hide" depending on the state
        <div>
            <button onClick={() => {
                setState(!state)
            }}>
                {state ? "Hide" : "Show"}
            </button>
            {state ?
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Culpa omnis autem iste quas praesentium quisquam ullam quo. 
                     Consequuntur voluptatum deleniti et accusantium eaque inventore quis? 
                     Numquam quibusdam ullam nemo quod.</p> : ""}
        </div>
    )
}

export default UseStateHookTask04;
