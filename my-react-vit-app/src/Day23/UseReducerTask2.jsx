import React, { useReducer, useState } from 'react'

const UseReducerTask2 = () => {
    let initialvalue = {
        cartItem : []
    }

    let reducer = (state, action)=>{
        switch (action.type) {
            case "add":
                return{
                    ...state , cartItem : [...state.cartItem, action.payload]
                }
                break;
        
            default:
                return state
                break;
        }
    }
    let handChange = (e) =>{
        let {name, value} = e.target;
        setItem((prev) =>{
            return{
            ...prev , [name] : value
        }
        })
    }
    let [item, setItem ] = useState({id : Date.now(), name : "", price : "" , quantity : ""})
    let {name , price, quantity} = item;
    let [state, dispatch] = useReducer(reducer, initialvalue)
    return (
    <div>
        <form action="">
            <input type="text" name='name' value={name} onChange={handChange}/>
            <input type="text" name='price' value={price} onChange={handChange}/>
            <input type="text" name='quantity' value={quantity} onChange={handChange}/>
            <button onClick={(e)=>{
                e.preventDefault();
                dispatch({type : "add", payload : item})
                setItem({id : Date.now(), name : "", price : "" , quantity : ""})
            }}>Submit</button>
        </form>
            <div>
                {
                    state.cartItem.map((item, ind)=>{
                    return(
                        <div key={ind}>
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                            <p>{item.quantity}</p>
                        </div>
                    );
                    })
                }
            </div>
    </div>
  )
}

export default UseReducerTask2
