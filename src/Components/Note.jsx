import { useContext } from "react";
import { RiEditBoxLine } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import { ThemesContext } from "../Contexts/ThemesContext";
import { NotesContext } from "../Contexts/NotesContext";

const Note = ({ note }) => {
  const { themesState } = useContext(ThemesContext);
  const { notesState, dispatch } = useContext(NotesContext);

  const handleDeleteNote = (id) => {
    dispatch({ type: "DELETE_NOTE", payload: id });
  };

  const toggleEditNoteModal = (note) => {
    dispatch({ type: "TOGGLE_EDIT_NOTE_MODAL" });
    dispatch({ type: "SET_NOTE_TITLE_VALUE", payload: note.title });
    dispatch({ type: "SET_NOTE_DESCRIPTION_VALUE", payload: note.description });
    dispatch({ type: "SET_NOTE_TO_BE_UPDATED_ID", payload: note.id });
    // dispatch({ type: "SET_IS_UPDATING", payload: note.id });
  };

  return (
    <div className="w-full md:w-[250px]">
      <div
        className={`bg-${themesState.currentTheme}-500 px-2 font-bold text-gray-900`}
      >
        <h2>{note.title}</h2>
      </div>
      <div className={`bg-${themesState.currentTheme}-100 p-2`}>
        <p className="text-justify text-gray-900">{note.description}</p>
      </div>
      <div
        className={`flex justify-between items-center px-2 py-1 bg-${themesState.currentTheme}-100`}
      >
        <div>
          <p>Created: 10:30 AM</p>
        </div>
        <div className="flex gap-1 items-center text-2xl">
          <RiEditBoxLine
            onClick={() => toggleEditNoteModal(note)}
            className="cursor-pointer hover:font-bold transition duration-300"
          />
          <RxCrossCircled
            onClick={() => handleDeleteNote(note.id)}
            className="cursor-pointer hover:font-bold transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
