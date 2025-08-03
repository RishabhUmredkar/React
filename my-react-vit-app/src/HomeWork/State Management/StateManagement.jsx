import React from 'react'
import { ThemeProvider } from './ThemeContext'; // Import the ThemeProvider
import ThemeToggler from './ThemeToggler'; // Import the ThemeToggler component
import { CartProvider } from './CartContext';
import CartComponent from './CartComponent';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';
import UserList from './UserList';
import AddTask from './AddTask';
import TaskList from './TaskList';


// 🔷 State Management
// 46.	Global Shopping Cart with Context API
// Manage a global shopping cart using the React Context API to allow any component to add/remove items.
// 47.	Theme Management with Context + Reducer
// Use React Context and useReducer to manage theme switching (light and dark) across the application.
// 48.	Redux-Based Counter
// Create a Redux store to manage a counter state. Include actions to increment, decrement, and reset the count.
// 49.	User List from API Using Redux
// Fetch a list of users using an API call and store the result in Redux. Display the user list in the component.
// 50.	Task Management with Redux Toolkit
// Build a complete to-do application using Redux Toolkit with features to add, edit, and delete tasks.

const StateManagement = () => {
    return (
        <div>
            {/* 46.	Global Shopping Cart with Context API */}
            {/* <ThemeProvider >
    <ThemeToggler />
  </ThemeProvider> */}

            {/* 47.	Theme Management with Context + Reducer */}

            {/* <CartProvider>
    <CartComponent />
  </CartProvider> */}


            {/* 48.	Redux-Based Counter */}

            {/* <Provider store={store}>
                <Counter />
            </Provider> */}
            {/* 49.	User List from API Using Redux */}
            {/* <Provider store={store}>
    <UserList />
  </Provider> */}

            {/* 50.	Task Management with Redux Toolkit */}
            <Provider store={store}>
                <div>
                    <h1>Task Management App</h1>
                    <AddTask />
                    <TaskList />
                </div>
            </Provider>
        </div>
    )
}

export default StateManagement
