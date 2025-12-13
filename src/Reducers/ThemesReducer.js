export const ThemesReducer = (
  state,
  { type, payload } = { type: "", payload: () => {} }
) => {
  switch (type) {
    case "SET_THEME":
      return { ...state, currentTheme: payload };
    case "SET_IS_OPEN":
      return { ...state, isOpen: !state.isOpen };
  }
};
