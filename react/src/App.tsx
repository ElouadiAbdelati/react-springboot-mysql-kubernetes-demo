import React from "react";
import "./App.css";
import User from "./pages/user";
import NavBar from "components/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <User />
    </div>
  );
}

export default App;
