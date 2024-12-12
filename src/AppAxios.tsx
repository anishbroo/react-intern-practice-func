import React, { useState } from "react";
import "./App.css";
import FetchingUsingGetMethod from "./axios/getMethod";
import SendingDataUsingPostMethod from "./axios/postMethod";
import AsyncAwait from "./axios/asyncAwait";

const App: React.FC = () => {
  return (
    <>
      <FetchingUsingGetMethod />
      <SendingDataUsingPostMethod />
      {/* <AsyncAwait /> */}
    </>
  );
};

export default App;
