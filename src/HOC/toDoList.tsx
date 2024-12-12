import React, { useEffect, useRef, useState } from "react";

const ToDoList: React.FC<{
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ todos, setTodos }) => {
  const [task, setTask] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const HandleAddTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    const updatedTask = todos.filter((item, i) =>
      console.log({
        item,
      })
    );
    setTodos(updatedTask);
  };

  useEffect(() => {
    return ref.current?.focus();
  });

  return (
    <div>
      <h2>To-Do-List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        ref={ref}
      />
      <button onClick={HandleAddTask}>Add task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
