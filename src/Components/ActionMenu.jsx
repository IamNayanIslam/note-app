import { RiAddBoxLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

const ActionMenu = ({ toggleAddNoteModal }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full p-4 md:px-8 md:py-4 bg-white shadow-lg rounded-xl">
      <form className="w-full md:w-1/3 mb-4 md:mb-0">
        <div className="border-2 border-teal-500 rounded-full flex items-center justify-between shadow-md focus-within:ring-2 focus-within:ring-teal-300 transition duration-300">
          <input
            type="text"
            placeholder="Search your note here."
            max={20}
            required
            className="flex-1 px-4 py-2 bg-transparent rounded-full focus:outline-none placeholder-gray-500"
          />
          <button className="bg-teal-500 p-3 rounded-full text-white transition duration-300 hover:bg-teal-600 active:scale-95 m-1">
            <FaSearch className="h-5 w-5" />
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center gap-2">
        <button className="bg-teal-500 p-3 rounded-full text-white shadow-md hover:bg-teal-600 transition duration-300 active:scale-95">
          <FaFilter className="h-5 w-5" />
        </button>
        <button className="bg-teal-500 p-3 rounded-full text-white shadow-md hover:bg-teal-600 transition duration-300 active:scale-95">
          <RiAddBoxLine className="h-5 w-5" onClick={toggleAddNoteModal} />
        </button>
        <button className="bg-teal-500 p-3 rounded-full text-white shadow-md hover:bg-teal-600 transition duration-300 active:scale-95">
          <IoIosColorPalette className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ActionMenu;
