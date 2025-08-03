import React, { useState } from 'react'

// 24.	Empty To-Do List Message

const EmptyTodoListMessage = () => {

    const [todos, setTodos] = useState([]);
    const addTodo = () => {
        setTodos([...todos, `Task ${todos.length + 1}`]);
    };
    return (
        <div>
            <button onClick={addTodo}>Add Task</button>

            {todos.length === 0 ? (
                <p>No tasks to show.</p>
            ) : (
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default EmptyTodoListMessage
