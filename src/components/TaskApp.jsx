import { useReducer, useState } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import { taskReducer } from '../reducers/taskReducer.js';

export default function TaskApp() {
 const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  function handleAddTask(text) {
  dispatch({
    type:"add_task",
    payload:{
      id:nextId++,
      text:text
    }
  })
  }

  function handleChangeTask(task) {
    dispatch({
      type:"edit_task",
      payload:task
    })
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type:"delete_task",
      payload:taskId
    })
  }
  const handleColorChange = (color,id) => {
    dispatch({
      type:"change_color_task",
      payload:{
        id,
        color
      }
    })
  };
  return (
    <>
      <h1>task app</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        onColorChange={handleColorChange}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 1, text: 'Task 1', done: false, color: 'red' },
  { id: 2, text: 'Task 2', done: false, color: 'green' },
  { id: 3, text: 'Task 3', done: false, color: 'blue' }
];
