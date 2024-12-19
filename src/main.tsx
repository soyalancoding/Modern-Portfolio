import ReactDOM from "react-dom/client";
// React router v6
import { BrowserRouter } from "react-router-dom";
// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Context
import { ThemeProvider } from "@/shared/contexts/ThemeContext";

import App from "@/App.tsx";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root") || document.body).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    <ToastContainer />
  </BrowserRouter>,
);
