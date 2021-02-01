import React from "react";

import "./App.css";
import AddColumn from "./components/AddColumn";
import ColumnList from "./components/ColumnList";

function App() {
  return (
    <div className="App">
      <AddColumn />
      <ColumnList />
    </div>
  );
}

export default App;
