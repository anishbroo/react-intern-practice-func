import React, { useEffect, useRef } from "react";

const withToDoCount = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithToDoCount: React.FC<P & { todos: string[] }> = ({
    todos,
    ...props
  }) => {
    useEffect(() => {
      console.log(`Current number of list to do: ${todos.length}`);
    }, [todos]);

    return <WrappedComponent {...(props as P)} todos={todos} />;
  };
  return WithToDoCount;
};

export default withToDoCount;
