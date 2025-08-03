import React, { useReducer } from 'react';

const UseReducerCRUD = () => {
  let initialValue = {
    item: { name: '', price: '', quantity: '', id: Date.now() },
    cartItem: [
      { name: 'Sample Item', price: '100', quantity: '1', id: Date.now() + 1 },
      { name: 'Sample Item 2', price: '200', quantity: '2', id: Date.now() + 2 }
    ]
  };

  let reducer = (state, action) => {
    switch (action.type) {
      case 'create':
        return {
          ...state,
          item: { ...state.item, [action.payload.name]: action.payload.value }
        };

      case 'add':
        return {
          ...state,
          cartItem: [...state.cartItem, { ...state.item, id: Date.now() }],
          item: { name: '', price: '', quantity: '', id: Date.now() }
        };

      case 'delete':
        return {
          ...state,
          cartItem: action.payload
        };

      case 'update':
        return {
          ...state,
          cartItem: action.payload.filterArr,
          item: {
            name: action.payload.updateItem.name,
            price: action.payload.updateItem.price,
            quantity: action.payload.updateItem.quantity
          }
        };

      default:
        return state;
    }
  };

  let [state, dispatch] = useReducer(reducer, initialValue);
  let { item, cartItem } = state;
  let { name, price, quantity } = item;

  let handleChange = (e) => {
    dispatch({
      type: 'create',
      payload: e.target
    });
  };

  let handelSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add'
    });
  };

  let handleDelete = (id) => {
    let filterArr = cartItem.filter((item) => item.id !== id);
    dispatch({
      type: 'delete',
      payload: filterArr
    });
  };

  let handleUpdate = (id) => {
    let filterArr = cartItem.filter((item) => item.id !== id);
    let updateItem = cartItem.find((item) => item.id === id);
    dispatch({
      type: 'update',
      payload: { filterArr, updateItem }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">🛒 UseReducer CRUD</h1>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Item Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
            placeholder="Item Price"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="quantity"
            value={quantity}
            onChange={handleChange}
            placeholder="Item Quantity"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handelSubmit}
            className="md:col-span-3 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            ➕ Add Item
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-semibold text-indigo-700">{item.name}</h2>
              <p className="text-gray-700">💰 Price: ₹{item.price}</p>
              <p className="text-gray-700">📦 Quantity: {item.quantity}</p>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                >
                  🗑 Delete
                </button>
                <button
                  onClick={() => handleUpdate(item.id)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded"
                >
                  ✏️ Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseReducerCRUD;
