import React, { useReducer } from 'react'

const UseReduceTask2 = () => {
    let initialValue = {
        item : {name : "", price : "",  qty : "",id : Date.now()},
        cartItem : [{}],
        isUpdate : false
    }   
    
    let Reducer = (state, action)=>{
        switch (action.type) {
            case "add": return {...state, }
                
                break;
        
            default:
                break;
        }
    }

    let[state , dispatch] = useReducer(Reducer, initialValue);

    return (
    <div>
      <form action="">
        <input type="text" name='name' value={name}  />
        <input type="text" name='price' value={price}  />
        <input type="text" name='name' value={qty2}  />
      </form>
    </div>
  )
}

export default UseReduceTask2
