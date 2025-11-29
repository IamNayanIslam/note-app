import React, { useState } from "react";
import ActionMenu from "../Components/ActionMenu";
import Header from "../Components/Header";
import Note from "../Components/Note";
import AddNote from "../Components/AddNote";
import EditNote from "../Components/EditNote";
import { v4 as uuidv4 } from "uuid";

const Notes = () => {
  const initial_notes = [
    {
      id: uuidv4(),
      title: "Grocery List",
      description:
        "Milk, Eggs, Bread, Organic Spinach, and check if the new coffee beans are in stock at the local roaster.",
    },
    {
      id: uuidv4(),
      title: "Project Alpha Kickoff Meeting",
      description:
        "Review Q3 goals, assign frontend and backend tasks, set deadline for MVP (Minimum Viable Product), and confirm CI/CD pipeline access for the new team members.",
    },
    {
      id: uuidv4(),
      title: "Book Recommendations",
      description:
        "The Subtle Art of Not Giving a F*ck, Atomic Habits, and re-read Clean Code by Robert C. Martin.",
    },
    {
      id: uuidv4(),
      title: "Database Schema Draft",
      description:
        "Tables needed: Users (id, name, email, role), Posts (id, userId, title, content, publishedAt), Comments (id, postId, userId, text). Remember to set up foreign key constraints.",
    },
  ];
  const [addNoteModal, setAddNoteModal] = useState(false);
  const [editNoteModal, setEditNoteModal] = useState(false);
  const [notes, setNotes] = useState(initial_notes);
  const [currentlyEditingNote, setCurrentlyEditingNote] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAddNoteModal = () => {
    setAddNoteModal(!addNoteModal);
  };

  const toggleEditNoteModal = () => {
    setEditNoteModal(!editNoteModal);
  };

  const startNoteEditing = (id) => {
    const findNote = notes.find((note) => note.id === id);
    setCurrentlyEditingNote(findNote);
    toggleEditNoteModal();
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = [...notes].reverse().filter((note) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      note.title.toLowerCase().includes(q) ||
      note.description.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <Header />
      <ActionMenu
        toggleAddNoteModal={toggleAddNoteModal}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 px-8 py-8">
        {filteredNotes.map((note) => (
          <Note
            key={note.id}
            note={note}
            startNoteEditing={startNoteEditing}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
      {addNoteModal && (
        <AddNote
          toggleAddNoteModal={toggleAddNoteModal}
          notes={notes}
          setNotes={setNotes}
        />
      )}
      {editNoteModal && (
        <EditNote
          toggleEditNoteModal={toggleEditNoteModal}
          currentlyEditingNote={currentlyEditingNote}
          notes={notes}
          setNotes={setNotes}
        />
      )}
    </div>
  );
};

export default Notes;
