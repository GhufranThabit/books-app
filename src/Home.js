import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import BooksList from "./components/Books/BooksList";
import { SearchContextProvider } from "./context/SearchContext";

const Home = () => {
  return (
    <div className="App">
      <SearchContextProvider>
        <Header />
        <BooksList />
      </SearchContextProvider>
    </div>
  );
};

export default Home;
