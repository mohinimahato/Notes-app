// import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <div className="header-div">
        <Header name="My Notes" />
      </div>
      <div>
        <Search search="Search Your Notes :)" />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
