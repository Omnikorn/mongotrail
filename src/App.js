
import SignIn from './components/SignIn';
import './App.css';
import Wedding1 from "./components/Test.component"
// const express = require ("express");
const mongoose = require("mongoose");
const db = require ("./models")


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wedding", { useNewUrlParser: true });

function App() {
  return (
    <div className="App">
      <Wedding1 />
    </div>
  );
}

export default App;
