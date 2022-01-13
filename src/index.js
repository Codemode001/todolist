import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

/*styles*/
import "./Styles/app.scss";

import App from "./App";

reactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
