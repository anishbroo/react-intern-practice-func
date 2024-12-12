import React from "react";
import withAuth from "./withAuth";
import Dashboard from "./dashboard";
import Profile from "./profile";

const WrapDashProfile: React.FC = () => {
  const isAuth = true;
  const username = "Martin";
  const email = "martin8@gmail.com";

  //wrapping
  // const ProtectedDashboard = withAuth(Dashboard);
  // const ProtectedProfile = withAuth(Profile);

  return (
    <div>
      <h2>Application</h2>
      <Dashboard isAuthenticated={isAuth} username={username} />
      <Profile isAuthenticated={isAuth} username={username} email={email} />
    </div>
  );
};

export default WrapDashProfile;
