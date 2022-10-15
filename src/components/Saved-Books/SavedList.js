import React from "react";
import BooksCard from "../Books/BooksCard";
import { useSavedContext, SavedContext } from "../../context/SavedContext";
import "../Books/books.css";

const SavedList = () => {
  const { savedItems } = useSavedContext(SavedContext);
  return (
    <div className="books-container">
      {savedItems.length > 0 ? (
        savedItems.map((book) => <BooksCard book={book} key={book.id} />)
      ) : (
        <h1>You don't have any saved books yet!</h1>
      )}
    </div>
  );
};

export default SavedList;
