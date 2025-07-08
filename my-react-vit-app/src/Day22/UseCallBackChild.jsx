import React from 'react'

const UseCallBackChild = (props) => {
    let{a, func} = props
    console.log("child Component",a,func);
    
  return (
    <div>
      UseCallBackChild
    </div>
  )
}

export default React.memo(UseCallBackChild)


