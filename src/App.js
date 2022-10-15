import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import BookDetails from "./components/Books/BookDetails";
import Navbar from "./components/Navbar/Navbar";
import SavedList from "./components/Saved-Books/SavedList";

function App() {
  return (
    <div className=" App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collection" element={<SavedList />} />
        <Route path="/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
