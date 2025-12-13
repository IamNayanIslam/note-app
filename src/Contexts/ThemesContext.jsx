import { createContext, useEffect, useReducer } from "react";
import { ThemesReducer } from "../Reducers/ThemesReducer";

export const ThemesContext = createContext({ state: {}, dispatch: () => {} });

const INITIAL_THEME = {
  currentTheme: "teal",
  isOpen: false,
};

export const ThemesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    ThemesReducer,
    JSON.parse(localStorage.getItem("state")) || INITIAL_THEME
  );

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  });
  const values = { state, dispatch };

  return (
    <ThemesContext.Provider value={values}>{children}</ThemesContext.Provider>
  );
};
