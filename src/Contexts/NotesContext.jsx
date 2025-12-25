import { createContext, useEffect, useReducer } from "react";
import { NotesReducer } from "../Reducers/NotesReducer";

export const NotesContext = createContext({
  notesState: {},
  dispatch: () => {},
});

const INITIAL_NOTES_STATE = {
  notes: [],
  noteTitleValue: "",
  noteDescriptionValue: "",
  noteToBeUpdatedId: 0,
  toggleAddNoteModal: false,
  toggleEditNoteModal: false,
};

export const NotesContextProvider = ({ children }) => {
  const [notesState, dispatch] = useReducer(
    NotesReducer,
    JSON.parse(localStorage.getItem("notesState")) || INITIAL_NOTES_STATE
  );

  useEffect(() => {
    localStorage.setItem("notesState", JSON.stringify(notesState));
  });
  const values = { notesState, dispatch };

  return (
    <NotesContext.Provider value={values}>{children}</NotesContext.Provider>
  );
};
