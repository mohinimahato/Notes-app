// import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";

import AddNotes from "./components/AddNotes";

const App = () => {
  return (
    <div>
      <div className="header-div">
        <Header name="My Notes" />
      </div>
      <div></div>
      <div>
        <AddNotes />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
