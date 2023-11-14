import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "../node_modules/uikit/dist/css/uikit.min.css";
import "./styles.css";

UIkit.use(Icons);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
