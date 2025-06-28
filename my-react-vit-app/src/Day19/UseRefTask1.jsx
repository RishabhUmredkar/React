import React, { useEffect, useRef } from 'react'

const UseRefTask1 = () => {
    //Focus an inoput element when a component mounts
    let inputRef = useRef()
    // useEffect (()=>{
    //     inputRef.current.style.background = "red"

    // })
  return (
    <div>
      <form action="">
        <input type="text" ref={inputRef} className='border-[4px]' />
      </form>
      <p onClick={()=>{
        inputRef.current.style.background = "red"
      }}>TEXT</p>
    </div>
  )
}

export default UseRefTask1
