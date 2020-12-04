import React, { useState, useEffect } from "react";

import "./App.css";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <>
      <div className="App">
        <TodoList />
      </div>
    </>
  );
}

export default App;
