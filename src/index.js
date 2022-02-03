import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";

import App from "./App";

reactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
