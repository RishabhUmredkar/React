import React from 'react';
import { useCart } from './CartContext';

const CartComponent = () => {
  const { cart, addItem, removeItem } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} 
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem({ id: 1, name: 'Item 1', price: 20 })}>Add Item 1</button>
    </div>
  );
};

export default CartComponent;
