// import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import AddNotes from "./components/AddNotes";
import Notes from "./components/Notes";
import { useState, useEffect } from "react";
const App = () => {
  let initNote;
  if (localStorage.getItem("notes") === null) {
    initNote = [];
  } else {
    initNote = JSON.parse(localStorage.getItem("notes"));
  }
  const addNotes = (desc, priority) => {
    console.log("I'm adding new notes", desc, priority);
    let id;
    if (notes.length == 0) {
      id = 0;
    } else {
      id = notes[notes.length - 1].id + 1;
    }

    console.log(id);
    const myNotes = {
      id: id,
      priority: priority,
      desc: desc,
    };
    setNotes([...notes, myNotes]);
  };
  const onDelete = (note) => {
    setNotes(
      notes.filter((e) => {
        return e !== note;
      })
    );
  };
  const onEdit = (note) => {
    console.log("Editing note", note);
  };

  const [notes, setNotes] = useState(initNote);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <div className="header-div">
        <Header name="My Notes" />
      </div>

      <div>
        <AddNotes
          note="Click here to add notes"
          className="border border-danger"
          addNotes={addNotes}
        />
        <Notes notes={notes} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
