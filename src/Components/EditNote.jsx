import { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ThemesContext } from "../Contexts/ThemesContext";
import { NotesContext } from "../Contexts/NotesContext";

const EditNote = ({ currentlyEditingNote, notes, setNotes }) => {
  const { themesState } = useContext(ThemesContext);
  const { notesState, dispatch } = useContext(NotesContext);
  const [editedNote, setEditedNote] = useState(currentlyEditingNote);

  const handleTitleChange = (e) => {
    dispatch({ type: "SET_NOTE_TITLE_VALUE", payload: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    dispatch({ type: "SET_NOTE_DESCRIPTION_VALUE", payload: e.target.value });
  };

  const toggleEditNoteModal = () => {
    dispatch({ type: "TOGGLE_EDIT_NOTE_MODAL" });
  };

  const handleNoteUpdate = (e) => {
    e.preventDefault();

    dispatch({ type: "SET_UPDATED_NOTE" });

    toggleEditNoteModal();
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div
        onClick={toggleEditNoteModal}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/75 p-4 sm:p-6 backdrop-blur-sm"
      >
        <form
          onClick={handleFormClick}
          className={`w-full md:w-[400px] border-2 border-${themesState.currentTheme}-500 rounded-xl px-4 py-2 bg-white`}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold">Edit Your Note</h2>
            <span
              onClick={toggleEditNoteModal}
              className={`bg-${themesState.currentTheme}-500 hover:bg-${themesState.currentTheme}-600 transition duration-300 p-2 rounded-full text-white cursor-pointer`}
            >
              <IoCloseSharp />
            </span>
          </div>

          <div className="flex flex-col gap-2 justify-center my-3">
            <label htmlFor="title" className="text-sm">
              Note Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              maxLength={30}
              placeholder="Enter your note title."
              value={notesState.noteTitleValue}
              onChange={handleTitleChange}
              className={`border border-gray-200 p-2 rounded-md outline-none focus:outline-none focus:ring-1 focus:ring-${themesState.currentTheme}-500`}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center my-3">
            <label htmlFor="title" className="text-sm">
              Note Description <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="description"
              maxLength={100}
              placeholder="Enter your note Description."
              value={notesState.noteDescriptionValue}
              onChange={handleDescriptionChange}
              className={`border border-gray-200 p-2 rounded-md outline-none focus:outline-none focus:ring-1 focus:ring-${themesState.currentTheme}-500`}
            />
          </div>
          <button
            onClick={handleNoteUpdate}
            className={`bg-${themesState.currentTheme}-500 hover:bg-${themesState.currentTheme}-600 transition duration-300 w-full p-2 rounded-xl text-white font-bold cursor-pointer`}
          >
            Update Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
