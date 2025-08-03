import React, { useState } from 'react'

const ShoppingListForm = () => {
  const [state, setState] = useState({
    item: '',
    shoppingList: []
  });

  const handleInputChange = (e) => {
    setState({ ...state, item: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.item) {
      setState({ item: '', shoppingList: [...state.shoppingList, state.item] });
    }
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item">Item:</label>
          <input type="text" id="item" value={state.item} onChange={handleInputChange} placeholder="Enter a new item" />
        </div>
        <button type="submit">Add Item</button>
      </form>

      {state.shoppingList.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Your Shopping List:</h3>
          <ul>
            {state.shoppingList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ShoppingListForm
