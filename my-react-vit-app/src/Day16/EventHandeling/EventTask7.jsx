import React from 'react'
import { LiaParachuteBoxSolid } from "react-icons/lia";

const EventTask7 = () => {
  return (
    <div contentEditable = "true" onKeyDown={(e)=>{
        console.log(e); 
    }} className='h-[100vh] flex justify-center items-center'>
        <div>
            <LiaParachuteBoxSolid fontSize="80px" color='brown' />
        </div>
    </div>
  )
}




export default EventTask7
