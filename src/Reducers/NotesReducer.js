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
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload),
      };
  }
};
