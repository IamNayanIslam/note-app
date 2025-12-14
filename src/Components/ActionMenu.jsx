import { RiAddBoxLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { useContext } from "react";
import { ThemesContext } from "../Contexts/ThemesContext";

const ActionMenu = ({ toggleAddNoteModal, searchQuery, setSearchQuery }) => {
  const { themesState, dispatch } = useContext(ThemesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const initiateThemeChange = () => {
    dispatch({ type: "SET_IS_OPEN" });
  };

  const handleThemeChange = (color) => {
    dispatch({ type: "SET_THEME", payload: color });
    dispatch({ type: "SET_IS_OPEN" });
  };

  const stopPropagationTheme = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:gap-4 w-full p-4 md:px-8 md:py-4 bg-white shadow-lg rounded-xl">
        <form className="w-full md:w-2/5 mb-4 md:mb-0" onSubmit={handleSubmit}>
          <div
            className={`
              border-2 rounded-full flex items-center justify-between shadow-md focus-within:ring-2 transition duration-300
              border-${themesState.currentTheme}-500 
              focus-within:ring-${themesState.currentTheme}-300
            `}
          >
            <input
              type="text"
              placeholder="Search your note here."
              maxLength={30}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
              className="flex-1 px-4 py-2 bg-transparent rounded-full focus:outline-none placeholder-gray-500"
            />
            <button
              className={`bg-${themesState.currentTheme}-500 p-3 rounded-full text-white transition duration-300 hover:bg-${themesState.currentTheme}-600 active:scale-95 m-1`}
              type="submit"
            >
              <FaSearch className="h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-2">
          <button
            className={`bg-${themesState.currentTheme}-500 p-3 rounded-full text-white shadow-md hover:bg-${themesState.currentTheme}-600 transition duration-300 active:scale-95 cursor-pointer`}
          >
            <FaFilter className="h-5 w-5" />
          </button>
          <button
            className={`bg-${themesState.currentTheme}-500 p-3 rounded-full text-white shadow-md hover:bg-${themesState.currentTheme}-600 transition duration-300 active:scale-95 cursor-pointer`}
          >
            <RiAddBoxLine className="h-5 w-5" onClick={toggleAddNoteModal} />
          </button>

          <div className="relative" onClick={stopPropagationTheme}>
            <button
              className={`bg-${themesState.currentTheme}-500 p-3 rounded-full text-white shadow-md hover:bg-${themesState.currentTheme}-600 transition duration-300 active:scale-95 cursor-pointer`}
              onClick={initiateThemeChange}
            >
              <IoIosColorPalette className="h-5 w-5" />
            </button>

            <div
              onClick={stopPropagationTheme}
              className={`
                absolute top-full right-0 mt-2 z-10 
                p-2 bg-white rounded-lg shadow-xl 
                border border-gray-200 transform transition-all duration-300 origin-top
                ${
                  themesState.isOpen
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0 pointer-events-none"
                }
              `}
            >
              <ul className="flex gap-2">
                <li
                  className="w-6 h-6 rounded-full bg-teal-500 cursor-pointer border-2 border-transparent hover:border-teal-700"
                  onClick={() => handleThemeChange("teal")}
                ></li>
                <li
                  onClick={() => handleThemeChange("violet")}
                  className="w-6 h-6 rounded-full bg-violet-500 cursor-pointer border-2 border-transparent hover:border-violet-700"
                ></li>
                <li
                  onClick={() => handleThemeChange("indigo")}
                  className="w-6 h-6 rounded-full bg-indigo-500 cursor-pointer border-2 border-transparent hover:border-indigo-700"
                ></li>
                <li
                  onClick={() => handleThemeChange("emerald")}
                  className="w-6 h-6 rounded-full bg-emerald-500 cursor-pointer border-2 border-transparent hover:border-emerald-700"
                ></li>
                <li
                  onClick={() => handleThemeChange("rose")}
                  className="w-6 h-6 rounded-full bg-rose-500 cursor-pointer border-2 border-transparent hover:border-rose-700"
                ></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionMenu;
