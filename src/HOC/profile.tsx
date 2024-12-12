import React from "react";
import withAuth from "./withAuth";

interface ProfileProps {
  username: string;
  email: string;
}

const Profile: React.FC<ProfileProps> = ({ username, email }) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default withAuth(Profile);
