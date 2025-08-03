import React, { useState } from 'react'

const ShoppingCart = () => {
    // State to hold the cart count
    const [cartCount, setCartCount] = useState(0);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Items in Cart: {cartCount}</p>
      <button onClick={() => setCartCount(cartCount + 1)}>Add to Cart</button>
    </div>
  )
}

export default ShoppingCart
