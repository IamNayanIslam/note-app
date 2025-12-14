import { createContext, useEffect, useReducer } from "react";
import { ThemesReducer } from "../Reducers/ThemesReducer";

export const ThemesContext = createContext({
  themesState: {},
  dispatch: () => {},
});

const INITIAL_THEME = {
  currentTheme: "teal",
  isOpen: false,
};

export const ThemesContextProvider = ({ children }) => {
  const [themesState, dispatch] = useReducer(
    ThemesReducer,
    JSON.parse(localStorage.getItem("themesState")) || INITIAL_THEME
  );

  useEffect(() => {
    localStorage.setItem("themesState", JSON.stringify(themesState));
  });
  const values = { themesState, dispatch };

  return (
    <ThemesContext.Provider value={values}>{children}</ThemesContext.Provider>
  );
};
