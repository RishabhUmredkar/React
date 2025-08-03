import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, EmptyCart, RemoveFromCart } from './slice'

const Reduxfun = () => {
  let dispatch = useDispatch()
  let data = useSelector((state)=> state.cartItem.count)
  return (
    <div>
      <p> Cart Items : {data}</p>
      <button onClick={()=>{dispatch(addToCart(100))}}>Inc</button>
      <button onClick={()=>{dispatch(RemoveFromCart())}}>dec</button>
      <button onClick={()=>{dispatch(EmptyCart())}}>reset</button>      
    </div>
  )
}

export default Reduxfun



