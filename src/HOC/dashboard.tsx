import React from "react";
import withAuth from "./withAuth";

interface DashboardProps {
  username: string;
}

const Dashboard: React.FC<DashboardProps> = ({ username }) => {
  return (
    <div>
      <h2>Welcome to dashboard, {username}</h2>
    </div>
  );
};

export default withAuth(Dashboard);
