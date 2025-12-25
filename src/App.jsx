import { useContext, useEffect } from "react";
import Notes from "./Pages/Notes";
import { ThemesContext } from "./Contexts/ThemesContext";
import AddNote from "./Components/AddNote";
import { NotesContext } from "./Contexts/NotesContext";

function App() {
  const { dispatch } = useContext(ThemesContext);
  const { notesState } = useContext(NotesContext);
  const closeThemePalate = () => {
    dispatch({ type: "SET_IS_OPEN_CLOSE" });
  };

  useEffect(() => {
    console.log(notesState);
  }, [notesState]);
  return (
    <>
      <div onClick={closeThemePalate}>
        <Notes />
      </div>
    </>
  );
}

export default App;
