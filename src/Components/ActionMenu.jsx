import { RiAddBoxLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { useContext, useEffect } from "react";
import { ThemesContext } from "../Contexts/ThemesContext";

const ActionMenu = ({ toggleAddNoteModal, searchQuery, setSearchQuery }) => {
  const { state, dispatch } = useContext(ThemesContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
  };

  const initiateThemeChange = () => {
    dispatch({ type: "SET_IS_OPEN" });
  };

  const handleThemeChange = (color) => {
    dispatch({ type: "SET_THEME", payload: color });
    dispatch({ type: "SET_IS_OPEN" });
  };

  useEffect(() => {
    console.log(state);
  });

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between w-full p-4 md:px-8 md:py-4 bg-white shadow-lg rounded-xl">
        <form className="w-full md:w-2/5 mb-4 md:mb-0" onSubmit={handleSubmit}>
          <div
            className={`
    border-2 rounded-full flex items-center justify-between shadow-md focus-within:ring-2 transition duration-300
    border-${state.currentTheme}-500 
    focus-within:ring-${state.currentTheme}-300
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
              className={`bg-${state.currentTheme}-500 p-3 rounded-full text-white transition duration-300 hover:bg-${state.currentTheme}-600 active:scale-95 m-1`}
              type="submit"
            >
              <FaSearch className="h-5 w-5" />
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center gap-2">
          <button
            className={`bg-${state.currentTheme}-500 p-3 rounded-full text-white shadow-md hover:bg-${state.currentTheme}-600 transition duration-300 active:scale-95 cursor-pointer`}
          >
            <FaFilter className="h-5 w-5" />
          </button>
          <button
            className={`bg-${state.currentTheme}-500 p-3 rounded-full text-white shadow-md hover:bg-${state.currentTheme}-600 transition duration-300 active:scale-95 cursor-pointer`}
          >
            <RiAddBoxLine className="h-5 w-5" onClick={toggleAddNoteModal} />
          </button>
          <button
            className={`bg-${state.currentTheme}-500 p-3 rounded-full text-white shadow-md hover:bg-${state.currentTheme}-600 transition duration-300 active:scale-95 cursor-pointer`}
            onClick={initiateThemeChange}
          >
            <IoIosColorPalette className="h-5 w-5" />
          </button>
        </div>
      </div>
      {state.isOpen && (
        <div className="min-h-[40px] p-2 md:px-8 md:py-2 flex justify-end bg-transparent">
          <ul className="flex gap-2">
            <li
              className="w-[24px] h-[24px] rounded-full bg-teal-500 p-5"
              onClick={() => handleThemeChange("teal")}
            ></li>
            <li
              onClick={() => handleThemeChange("violet")}
              className="w-[24px] h-[24px] rounded-full bg-violet-500 p-5"
            ></li>
            <li
              onClick={() => handleThemeChange("indigo")}
              className="w-[24px] h-[24px] rounded-full bg-indigo-500 p-5"
            ></li>
            <li
              onClick={() => handleThemeChange("emerald")}
              className="w-[24px] h-[24px] rounded-full bg-emerald-500 p-5"
            ></li>
            <li
              onClick={() => handleThemeChange("rose")}
              className="w-[24px] h-[24px] rounded-full bg-rose-500 p-5"
            ></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ActionMenu;
