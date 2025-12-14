import { LuNotebookText } from "react-icons/lu";
import { FiLogIn } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { useContext, useState } from "react";
import { ThemesContext } from "../Contexts/ThemesContext";

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const { themesState } = useContext(ThemesContext);
  return (
    <div
      className={`flex justify-between px-4 py-2  md:px-8 md:py-4 bg-${themesState.currentTheme}-100`}
    >
      <div
        className={`flex items-center text-2xl font-bold cursor-pointer text-${themesState.currentTheme}-500 transition duration-300 hover:text-${themesState.currentTheme}-600`}
      >
        <LuNotebookText />
        <h1>Your Notes</h1>
      </div>
      <div>
        <ul className="flex gap-2">
          {!isLogedIn ? (
            <li
              className={`flex items-center gap-1 bg-${themesState.currentTheme}-500 p-2 rounded-full text-white cursor-pointer hover:bg-${themesState.currentTheme}-600 transition duration-300`}
            >
              <FiLogIn /> Log In
            </li>
          ) : (
            <li
              className={`flex items-center gap-1 bg-${themesState.currentTheme}-500 p-2 rounded-full text-white cursor-pointer hover:bg-${themesState.currentTheme}-600 transition duration-300`}
            >
              <LuLogOut /> Log Out
            </li>
          )}

          <li
            className={`flex items-center gap-1 bg-${themesState.currentTheme}-500 p-2 px-3 rounded-full text-white text-xl cursor-pointer hover:bg-${themesState.currentTheme}-600 transition duration-300`}
          >
            <WiMoonAltThirdQuarter />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
