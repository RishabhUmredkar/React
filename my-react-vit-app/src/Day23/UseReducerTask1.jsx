import React, { useReducer } from 'react'

const UseReducerTask1 = () => {
    let reducer = (state, action)=>{
        switch (action.type) {
            case 'inc':
                return state+=action.payload                
                break;
            
            case 'dec':
                return state-= action.payload
                break;
            default:
                return state = 0;
                break;
        }
    }
    let[state, setstate] = useReducer(reducer, 0)
  return (
    <div>
        <h1>{state}</h1>
      {/* <button onClick={()=>{setstate('inc')}}>Inc</button> */}
      <button onClick={()=>{setstate({type : 'inc' , payload : 100})}}>Inc + 100</button><br /><br />
      <button onClick={()=>{setstate({type : 'inc', payload : 150})}}>Inc + 150</button><br /><br />
      <button onClick={()=>{setstate({type : 'dec', payload : 150})}}>dec - 150</button><br /><br />
      <button onClick={()=>{setstate({type : 'res', payload : 0})}}>reset</button>
    </div>
  )
}

export default UseReducerTask1
