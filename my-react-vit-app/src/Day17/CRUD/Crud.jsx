import React, { Fragment, useState } from 'react'


const Crud = () => {
  let [user, setUser] = useState();
  let [Pass, setPass] = useState();
  let [list, setList] = useState([]);
  let handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, { UserName: user, Password: Pass }]);
  }

  // let show = () =>{
  //   <h1>hello</h1>
  //  { list.map((ite9m, ind)=>{
  //    <h1>{item}</h1> 
  //   })
  // }
  // }

  console.log(list);

  return (
    <div>
      <div className='w-[100%]'>
      <form action="" className='flex p-5 flex-col justify-center items-center h-[20vh] bg-slate-500'>
        <input type="text" placeholder='Enter the UserName' onChange={(e) => { setUser(e.target.value) }} />
        <input type="text" placeholder='Enter the Password' onChange={(e) => { setPass(e.target.value) }} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      </div>
      {/* <button onClick={show}>Button</button> */}
      <div className='w-[100%] flex flex-wrap bg-black'>
        {list.map((item, ind) => {
          return (
            <div className='w-[15vw] border-[1px] border-gray-400 m-3 p-2 text-slate-300 flex flex-col justify-center items-center' key={ind}>
              <p>{item.UserName}</p>
              <p>{item.Password}</p>
            </div>
          )
        })
        }

      </div>

    </div>
  )
}

export default Crud
