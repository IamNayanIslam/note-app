import { createContext, useReducer } from "react";

export const NotesContext = createContext({
  notesState: {},
  dispatch: () => {},
});

const INITIAL_NOTES_STATE = {
  notes: [],
  noteTitleValue: "",
  noteDescriptionValue: "",
  noteToBeUpdatedId: 0,
  isUpdating: false,
};

export const NotesContextProvider = ({ children }) => {
  const [notesState, dispatch] = useReducer(NotesReducer, INITIAL_NOTES_STATE);

  const values = { notesState, dispatch };

  return (
    <NotesContext.Provider value={values}>{children}</NotesContext.Provider>
  );
};
