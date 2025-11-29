import React from "react";
import ActionMenu from "../Components/ActionMenu";
import Header from "../Components/Header";
import Note from "../Components/Note";

const Notes = () => {
  const DUMMY_NOTES_DATA = [
    {
      id: "note-1",
      title: "Grocery List",
      description:
        "Milk, Eggs, Bread, Organic Spinach, and check if the new coffee beans are in stock at the local roaster.",
      color: "yellow",
      tags: ["Personal", "Urgent"],
    },
    {
      id: "note-2",
      title: "Project Alpha Kickoff Meeting",
      description:
        "Review Q3 goals, assign frontend and backend tasks, set deadline for MVP (Minimum Viable Product), and confirm CI/CD pipeline access for the new team members.",
      color: "blue",
      tags: ["Work", "Project"],
    },
    {
      id: "note-3",
      title: "Book Recommendations",
      description:
        "The Subtle Art of Not Giving a F*ck, Atomic Habits, and re-read Clean Code by Robert C. Martin.",
      color: "green",
      tags: ["Reading", "Personal"],
    },
    {
      id: "note-4",
      title: "Database Schema Draft",
      description:
        "Tables needed: Users (id, name, email, role), Posts (id, userId, title, content, publishedAt), Comments (id, postId, userId, text). Remember to set up foreign key constraints.",
      color: "red",
      tags: ["Work", "Tech", "Draft"],
    },
  ];
  return (
    <div>
      <Header />
      <ActionMenu />
      <div className="flex gap-2 px-8 py-8">
        {DUMMY_NOTES_DATA.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
