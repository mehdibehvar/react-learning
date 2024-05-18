import { useState } from 'react';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }
  const handleColorChange = (color,id) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            color:color
          };
        } else {
          return t;
        }
      })
    );
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
