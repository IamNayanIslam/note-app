import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemesContextProvider } from "./Contexts/ThemesContext.jsx";
import { NotesContextProvider } from "./Contexts/NotesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotesContextProvider>
      <ThemesContextProvider>
        <App />
      </ThemesContextProvider>
    </NotesContextProvider>
  </StrictMode>
);
