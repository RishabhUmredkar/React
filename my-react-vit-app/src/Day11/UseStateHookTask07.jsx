import React, { useState } from 'react'
import nasa from '../assets/nasa.png'
import nvidia from '../assets/nvidia.jpg'

const UseStateHookTask07 = () => {
    let [state, setstate]  = useState(false);

return (
    <div>
        <button onClick={() => setstate(!state)}>Nasa</button>
        {/* <button onClick={() => setstate(nvidia)}>Nvidia</button> */}
        <img src={state ? nasa : nvidia} alt="Selected" />
    </div>
)
}

export default UseStateHookTask07;