import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Crud2 = () => {
    const [state, setstate] = useState({
        username: "",
        password: "",
        list: [],
        id: uuidv4(),
        isUpdating : false
    })
    let { username, password, id, list } = state;

    let handleChange = (e) => {
        let { name, value } = e.target
        setstate({ ...state, [name]: value })
        console.log(state);
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        let newObj = {
            username: username,
            password: password,
            id: id,
            list: list,
            isUpdating : false
        }

        setstate({
            list: [...list, newObj],
            username: "",
            password: "",
            id: uuidv4(),
            isUpdating : false
        })
        console.log(state);
    }

    let handleDelete = (id)=>{
        let filterList = list.filter((val, ind)=>{
            return val.id != id
        })
        setstate({ username: "",
            password: "",
            id: uuidv4(),
            isUpdating : false,
             list: filterList})
    }

    let handleUpdate = (id) =>{
        let obj = list.find((val)=>{
            return val.id == id;
        })
        let filterList = list.filter((val)=>{
            return val.id != id;
        })
        setstate({
            isUpdating : true,
            username : obj.username,
            password : obj.password,
            id : obj.id,
            list : filterList
        })
    }
    return (
        <>
            <div className="flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
                    <form className="space-y-10">
                        <div>
                            <input name="username" value={username} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your username" />
                            <input name="password" value={password} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" />
                            <button type="submit" onClick={handleSubmit} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">{state.isUpdating ? "update" : "Login"}</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-full flex flex-wrap p-4 justify-center">
                {list.map((item, ind) => (
                    <div key={ind} className="w-[200px] bg-gray-800 text-white border border-gray-600 rounded-lg shadow-md m-4 p-4 flex flex-col items-center hover:scale-105 transition-transform duration-200">
                        <p className="text-lg font-semibold mb-2">{item.username}</p>
                        <p className="text-sm text-gray-300 mb-4">{item.password}</p>

                        <div className="flex space-x-2">
                            <button onClick={() => handleUpdate(item.id)} className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600 text-sm">
                                Update
                            </button>
                            <button onClick={() => handleDelete(item.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Crud2