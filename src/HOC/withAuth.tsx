import React, { useState } from "react";

interface WithAuthProps {
  isAuthenticated: boolean;
}

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P & WithAuthProps) => {
    const { isAuthenticated, ...restProps } = props;

    const [redirectToLogin, setRedirectToLogin] = useState(false);

    if (!isAuthenticated) {
      setRedirectToLogin(true);
    }

    if (redirectToLogin) {
      return <div>Please log in to access this page.</div>;
    }

    return <WrappedComponent {...(restProps as P)} />;
  };
};

export default withAuth;
