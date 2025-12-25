import { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ThemesContext } from "../Contexts/ThemesContext";
import { NotesContext } from "../Contexts/NotesContext";

const AddNote = () => {
  const { themesState } = useContext(ThemesContext);
  const { notesState, dispatch } = useContext(NotesContext);

  const toggleAddNoteModal = () => {
    dispatch({ type: "TOGGLE_ADD_NOTE_MODAL" });
  };

  const handleTitleChange = (e) => {
    dispatch({ type: "SET_NOTE_TITLE_VALUE", payload: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    dispatch({ type: "SET_NOTE_DESCRIPTION_VALUE", payload: e.target.value });
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    const newNote = {
      title: notesState.noteTitleValue,
      description: notesState.noteDescriptionValue,
      creationTime: new Date().toLocaleString(),
      isComplete: false,
      id: Date.now(),
    };

    if (
      newNote.title.trim().length === 0 ||
      newNote.description.trim().length === 0
    ) {
      alert("Please enter a valid note!!!");
      dispatch({ type: "SET_NOTE_TITLE_VALUE", payload: "" });
      dispatch({ type: "SET_NOTE_DESCRIPTION_VALUE", payload: "" });
    }

    dispatch({ type: "SET_NEW_NOTE", payload: newNote });
    dispatch({ type: "SET_NOTE_TITLE_VALUE", payload: "" });
    dispatch({ type: "SET_NOTE_DESCRIPTION_VALUE", payload: "" });
    dispatch({ type: "TOGGLE_ADD_NOTE_MODAL" });
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div
        onClick={toggleAddNoteModal}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/75 p-4 sm:p-6 backdrop-blur-sm"
      >
        <form
          onClick={handleFormClick}
          className={`w-full md:w-[400px] border-2 border-${themesState.currentTheme}-500 rounded-xl px-4 py-2 bg-white`}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold">Add a new Note</h2>
            <span
              onClick={toggleAddNoteModal}
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
            <label htmlFor="description" className="text-sm">
              Note Description <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="description"
              maxlength={100}
              placeholder="Enter your note Description."
              value={notesState.noteDescriptionValue}
              onChange={handleDescriptionChange}
              className={`border border-gray-200 p-2 rounded-md outline-none focus:outline-none focus:ring-1 focus:ring-${themesState.currentTheme}-500`}
            />
          </div>
          <button
            onClick={handleAddNote}
            className={`bg-${themesState.currentTheme}-500 hover:bg-${themesState.currentTheme}-600 transition duration-300 w-full p-2 rounded-xl text-white font-bold cursor-pointer`}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
