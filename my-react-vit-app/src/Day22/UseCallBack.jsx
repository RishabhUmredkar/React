import React, { useCallback, useState } from 'react'
import UseCallBackChild from './UseCallBackChild';

const UseCallBack = () => {
  let [state, setstate] = useState(0)
  let [state1, setstate1] = useState(0)
    let a = 10;
    console.log("parent Component");
    let func = useCallback(()=>{
        console.log("func");
        setstate(state +=1)
    },[])

    return (
    <div>
      <button onClick={()=>{
        setstate(state += 1)
      }} >click {state}</button>
          <br /> <br /><br /><hr />


      <button onClick={()=>{
        setstate1(state1 += 1)
      }} >click {state1}</button>

      <UseCallBackChild a={a} func={func}/>
    </div>
  )
}

export default UseCallBack
