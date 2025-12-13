import { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ThemesContext } from "../Contexts/ThemesContext";

const EditNote = ({
  toggleEditNoteModal,
  currentlyEditingNote,
  notes,
  setNotes,
}) => {
  const { state } = useContext(ThemesContext);
  const [editedNote, setEditedNote] = useState(currentlyEditingNote);

  const handleNoteChange = (e) => {
    setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
  };

  const handleNoteUpdate = (e) => {
    e.preventDefault();

    const updatedNotes = notes.map((note) =>
      note.id === editedNote.id ? editedNote : note
    );

    setNotes(updatedNotes);
    toggleEditNoteModal();
  };

  return (
    <div>
      <div
        onClick={toggleEditNoteModal}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/75 p-4 sm:p-6 backdrop-blur-sm"
      >
        <form
          className={`w-full md:w-[400px] border-2 border-${state.currentTheme}-500 rounded-xl px-4 py-2 bg-white`}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold">Edit Your Note</h2>
            <span
              onClick={toggleEditNoteModal}
              className={`bg-${state.currentTheme}-500 hover:bg-${state.currentTheme}-600 transition duration-300 p-2 rounded-full text-white cursor-pointer`}
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
              value={editedNote.title}
              onChange={handleNoteChange}
              className={`border border-gray-200 p-2 rounded-md outline-none focus:outline-none focus:ring-1 focus:ring-${state.currentTheme}-500`}
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
              value={editedNote.description}
              onChange={handleNoteChange}
              className={`border border-gray-200 p-2 rounded-md outline-none focus:outline-none focus:ring-1 focus:ring-${state.currentTheme}-500`}
            />
          </div>
          <button
            onClick={handleNoteUpdate}
            className={`bg-${state.currentTheme}-500 hover:bg-${state.currentTheme}-600 transition duration-300 w-full p-2 rounded-xl text-white font-bold cursor-pointer`}
          >
            Update Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
