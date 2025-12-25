import ActionMenu from "../Components/ActionMenu";
import Header from "../Components/Header";
import Note from "../Components/Note";
import AddNote from "../Components/AddNote";
import EditNote from "../Components/EditNote";
import { useContext } from "react";
import { NotesContext } from "../Contexts/NotesContext";
import NoNotes from "../Components/NoNotes";

const Notes = () => {
  const { notesState } = useContext(NotesContext);

  const filteredNotes = notesState.notes.filter((note) => {
    const query = (notesState.searchQuery || "").toLowerCase();
    return (
      note.title.toLowerCase().includes(query) ||
      note.description.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <Header />
      <ActionMenu />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 px-8 py-8">
        {filteredNotes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>

      {filteredNotes.length === 0 && <NoNotes />}
      {notesState.toggleAddNoteModal && <AddNote />}
      {notesState.toggleEditNoteModal && <EditNote />}
    </div>
  );
};

export default Notes;
