import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppContext from "./AppContext";
import AppRef from "./AppRef";
import AppReducer from "./AppReducer";
import AppCallback from "./AppCallback";
import AppCustomHooks from "./AppCustomHooks";
import AppHoc from "./AppHoc";
import AppAxios from "./AppAxios";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppContext /> */}
    {/* <AppRef /> */}
    {/* <AppReducer /> */}
    {/* <AppCallback /> */}
    {/* <AppCustomHooks /> */}
    {/* <AppHoc /> */}
    <AppAxios />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
