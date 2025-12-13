import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemesContextProvider } from "./Contexts/ThemesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemesContextProvider>
      <App />
    </ThemesContextProvider>
  </StrictMode>
);
