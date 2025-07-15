import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'

const Crud = () => {
    let [state , setstate] = useState({
        username : "",
        password : "",
        id : uuidv4(),
        list :[]
    })

    let{username , password, list, id} = state;
    let changeHandle =(e)=>{
        let{name, value} = e.target
        setstate({...state, [name] : value})
        console.log(state);   
    }
    let handleSubmit = (e) =>{
        e.preventDefault();
        let newObj ={
            username : username,
            password : password,
            id : id,
            list : list
        }

        setstate({
            list : [...list, newObj],
            username : "",
            password : "",
            id : uuidv4(),
        })
    }
    let handleDelete =(id) =>{
        let filterList = list.filter((val ,ind)=>{
            return val.id != id;
        })
        setstate({
            username : "",
            password : "",
            id : uuidv4(),
            list : filterList
        })

    }
    let handleUpdate =(id) =>{

        let filterList = list.filter((val ,ind)=>{
            return val.id != id;
        })

        let obj = list.find((val, ind)=>{
            return val.id == id;
        })
        setstate({
            username : obj.username,
            password : obj.password,
            id : obj.id,
            list : filterList
        })

    }
  return (
    <div>
        <input type="text" name='username' value={username} onChange={changeHandle} />
        <input type="text" name='password' value={password} onChange={changeHandle}/>
        <button type='submit' onClick={handleSubmit}>submit</button>
        <div>
            {
               
                list.map((val, ind)=>{
                    return(
                    <div key ={ind}>
                        <h1>{val.username}</h1>
                        <h1>{val.password}</h1>
                        <button onClick={()=>handleUpdate(val.id)}>Update</button>
                        <button onClick={()=>handleDelete(val.id)}>Delete</button>
                    </div>
                )
                })
            }
        </div>
    </div>
  )
}

export default Crud
