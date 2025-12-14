import { useContext } from "react";
import Notes from "./Pages/Notes";
import { ThemesContext } from "./Contexts/ThemesContext";

function App() {
  const { themesState, dispatch } = useContext(ThemesContext);
  const closeThemePalate = () => {
    dispatch({ type: "SET_IS_OPEN_CLOSE" });
  };
  return (
    <>
      <div onClick={closeThemePalate}>
        <Notes />
      </div>
    </>
  );
}

export default App;
