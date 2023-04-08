import React from "react";
import NoteItem from "./NoteItem";
const Notes = (props) => {
  return (
    <div>
      {props.notes.lenght === 0
        ? "No Todos to display"
        : props.notes.map((notes) => {
            return (
              <NoteItem
                note={notes}
                key={notes.id}
                onDelete={props.onDelete}
                onEdit={props.onEdit}
              />
            );
          })}
    </div>
  );
};
export default Notes;
