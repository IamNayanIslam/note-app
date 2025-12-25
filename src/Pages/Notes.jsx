import ActionMenu from "../Components/ActionMenu";
import Header from "../Components/Header";
import Note from "../Components/Note";
import AddNote from "../Components/AddNote";
import EditNote from "../Components/EditNote";
import { useContext } from "react";
import { NotesContext } from "../Contexts/NotesContext";

const Notes = () => {
  const { notesState } = useContext(NotesContext);

  return (
    <div>
      <Header />
      <ActionMenu />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 px-8 py-8">
        {notesState.notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>

      {notesState.toggleAddNoteModal && <AddNote />}
      {/* <EditNote /> */}
    </div>
  );
};

export default Notes;
