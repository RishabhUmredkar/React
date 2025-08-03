import React, { useState } from 'react'

const ListDeletion = () => {
  const [items, setItems] = useState([
    'Apples',
    'Bananas',
    'Oranges',
    'Grapes',
    'Pineapples',
  ]);

  // Function to delete an item
  const deleteItem = (index) => {
    const newItems = items.filter((val, itemIndex) => itemIndex !== index);
    setItems(newItems);
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDeletion
