import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ResumeTemplate } from "./components/ResumeTemplate/ResumeTemplate";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Test } from "./components/Test/Test";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/resume-template">
      <Provider store={store}>
        <Test />
        <ResumeTemplate />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log("analyst"));
