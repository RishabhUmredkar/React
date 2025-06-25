import React, { useState } from 'react'

const EventTask5 = () => {
  let [state, setstate] = useState({
    m1s1 : "grey",
    m1s2 : "white"
  })
  let handleClick = () =>{
    setstate((prevState) => {return{...prevState , m1s1 : "white" ? "white" : ""}})
  }
    return (
    <div>
      <h1>{state.m1s1}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  
)
}

export default EventTask5
