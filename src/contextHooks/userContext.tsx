import React, { createContext } from "react";

//creating context
const UserContext = createContext<string>("Default User");

export default UserContext;
