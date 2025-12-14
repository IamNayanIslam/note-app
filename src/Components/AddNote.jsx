import { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import { ThemesContext } from "../Contexts/ThemesContext";

const AddNote = ({ toggleAddNoteModal, notes, setNotes }) => {
  const { themesState } = useContext(ThemesContext);
  const [newNote, setNewNote] = useState({
    id: uuidv4(),
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  const handleAddNote = () => {
    setNotes([...notes, newNote]);
    toggleAddNoteModal();
    console.log(notes);
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
              maxlength={30}
              placeholder="Enter your note title."
              value={newNote.title}
              onChange={handleChange}
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
              value={newNote.description}
              onChange={handleChange}
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
