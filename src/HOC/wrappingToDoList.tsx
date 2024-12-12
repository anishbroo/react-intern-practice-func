import React, { useState } from "react";
import withToDoCount from "./withToDoCount";
import toDoList from "./toDoList";

const WrappingToDoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const WrappingList = withToDoCount(toDoList);

  return (
    <div>
      <WrappingList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default WrappingToDoList;
