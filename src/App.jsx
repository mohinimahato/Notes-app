// import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import AddNotes from "./components/AddNotes";
import Notes from "./components/Notes";
import { useState } from "react";
const App = () => {
  const onDelete = (note) => {
    console.log("Deleting note", note);

    setNotes(
      notes.filter((e) => {
        return e !== note;
      })
    );
  };
  const onEdit = (notes) => {
    console.log("Editing note", notes);
  };

  const [notes, setNotes] = useState([
    { id: 0, priority: "High🔥", desc: "Test " },
    { id: 1, priority: "Medium🚀", desc: "Test 2" },
    { id: 2, priority: "Low❗", desc: "Test 3" },
    { id: 3, priority: "Low❗", desc: "Test 3" },
    { id: 4, priority: "Low❗", desc: "Test 3" },
    { id: 5, priority: "Low❗", desc: "Test 3" },
  ]);

  return (
    <div>
      <form method="get" action="/">
        <div className="header-div">
          <Header name="My Notes" />
        </div>

        <div>
          <AddNotes
            note="Click here to add notes"
            className="border border-danger"
          />
          <Notes notes={notes} onDelete={onDelete} onEdit={onEdit} />
        </div>
      </form>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
