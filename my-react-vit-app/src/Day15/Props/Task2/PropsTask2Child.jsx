import React from 'react'

const PropsTask2Child = (props) => {
  let {props : {state, setState}} = props;
  return (
  <div>
  
  <h1>{state}</h1>
  <button onClick={()=>{
    setState(state+1)
    }}>+</button>
  
  </div>
  )
}

export default PropsTask2Child
