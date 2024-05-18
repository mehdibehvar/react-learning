import { useState } from 'react';

export default function TaskList({tasks, onChangeTask, onDeleteTask,onColorChange}) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} onColorChange={onColorChange}/>
        </li>
      ))}
    </ul>
  );
}

function Task({task, onChange, onDelete,onColorChange}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
           type="text"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
       <span className={`task-text ${task.color}`}> {task.text}</span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <div className="color-select">
        <label>
          <input
            type="checkbox"
            checked={task.color === 'red'}
            onChange={() => onColorChange('red',task.id)}
          />
          Red
        </label>
        <label>
          <input
            type="checkbox"
            checked={task.color === 'green'}
            onChange={() => onColorChange('green',task.id)}
          />
          Green
        </label>
        <label>
          <input
            type="checkbox"
            checked={task.color === 'blue'}
            onChange={() => onColorChange('blue',task.id)}
          />
          Blue
        </label>
      </div>
    </label>
  );
}
