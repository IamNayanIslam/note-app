import { MdDescription } from "react-icons/md";

export const NotesReducer = (
  state,
  { type, payload } = { type: "", payload: () => {} }
) => {
  switch (type) {
    case "SET_NOTE_TITLE_VALUE":
      return { ...state, noteTitleValue: payload };
    case "SET_NOTE_DESCRIPTION_VALUE":
      return { ...state, noteDescriptionValue: payload };
    case "SET_NEW_NOTE":
      return { ...state, notes: [...state.notes, payload] };
    case "TOGGLE_ADD_NOTE_MODAL":
      return { ...state, toggleAddNoteModal: !state.toggleAddNoteModal };
    case "TOGGLE_EDIT_NOTE_MODAL":
      return { ...state, toggleEditNoteModal: !state.toggleEditNoteModal };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload),
      };
    case "SET_NOTE_TO_BE_UPDATED_ID":
      return { ...state, noteToBeUpdatedId: payload };
    case "SET_UPDATED_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === state.noteToBeUpdatedId)
            return {
              ...note,
              title: state.noteTitleValue,
              description: state.noteDescriptionValue,
            };
          return note;
        }),
        noteToBeUpdatedId: 0,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: payload,
      };
  }
};
