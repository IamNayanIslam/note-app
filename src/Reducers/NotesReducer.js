export const NotesReducer = (
  state,
  { type, payload } = { type: "", payload: () => {} }
) => {
  switch (type) {
    case "SET_NOTE_TITLE_VALUE":
      return { ...state, noteTitleValue: payload };
    case "SET_NOTE_DESCRIPTION_VALUE":
      return { ...state, noteDescriptionValue: payload };
  }
};
