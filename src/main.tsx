import ReactDOM from "react-dom/client";
// React router v6
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") || document.body).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
