import React from "react";

//Defining HOC that will add loading functionality
const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  //enhanced component with loading behaviour
  const WithLoading: React.FC<P & { isLoading: boolean }> = ({
    isLoading,
    ...props
  }) => {
    if (isLoading) {
      return (
        <div>
          <h2>Loading data....</h2>
        </div>
      );
    }

    return <WrappedComponent {...(props as P)} />; //passing props to wrapped component
  };

  return WithLoading;
};

export default withLoading;
