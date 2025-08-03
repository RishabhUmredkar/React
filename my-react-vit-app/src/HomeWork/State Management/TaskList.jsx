import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, updateTask } from './taskSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [taskText, setTaskText] = useState('');

  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setTaskText(task.text);
  };

  const handleSave = () => {
    dispatch(updateTask({ id: editingTaskId, text: taskText }));
    setEditingTaskId(null);
    setTaskText('');
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <div>
                <input
                  type="text"
                  value={taskText}
                  onChange={(e) => setTaskText(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
              </div>
            ) : (
              <span>{task.text}</span>
            )}
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            <button onClick={() => handleEdit(task)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
