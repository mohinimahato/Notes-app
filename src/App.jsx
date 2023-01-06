// import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <h1>My Notes</h1>
      <Header name="New Notes" />
      <input />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
