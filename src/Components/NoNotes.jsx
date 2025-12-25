import { useContext } from "react";
import { ThemesContext } from "../Contexts/ThemesContext";

const NoNotes = () => {
  const { themesState } = useContext(ThemesContext);

  return (
    <div>
      <h2
        className={`text-${themesState.currentTheme}-500 text-2xl font-bold text-center`}
      >
        There is no note to show!!
      </h2>
    </div>
  );
};

export default NoNotes;
