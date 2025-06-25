import React from 'react'

const EventTask1 = () => {
    //Mouse Over HighLight
    let HandleMouseEnter = (e,a)=>{
        e.target.style.backgroundColor = "yellow";
        console.log(e,a);        
    }
  return (
    <div>
      <div
      onMouseEnter = {(e)=> { HandleMouseEnter(e,10)}}
       
      
       onMouseLeave={(e)=>{
        e.target.style.backgroundColor = ""
      }}
      
      
      > DIV</div>
    </div>
  )
}

export default EventTask1;