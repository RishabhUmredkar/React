import React, { Fragment, useState } from 'react'


const Crud = () => {
    let [user, setUser] = useState();
    let [Pass, setPass] = useState();
    let [list, setList] = useState([]);
    let handleSubmit = (e)=>{
      e.preventDefault();
        setList([...list, {UserName : user , Password : Pass}]);
    }

    let show = () =>{
      <h1>hello</h1>
     { list.map((item, ind)=>{
       <h1>{item}</h1> 
      })
    }
    }

    console.log(list);
    
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Enter the UserName' onChange={(e)=>{setUser(e.target.value)}}/>
        <input type="text" placeholder='Enter the Password' onChange={(e)=>{setPass(e.target.value)}}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <button onClick={show}>Button</button>




      { list.map((item, ind)=>{
        return(
          <Fragment key = {ind}>

          <p>{item.UserName}</p>
          </Fragment>
        )

})
    }
    </div>
  )
}

export default Crud
