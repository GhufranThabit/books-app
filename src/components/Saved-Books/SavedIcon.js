import React from "react";
import { SavedContext, useSavedContext } from "../../context/SavedContext";
import add from "../../assets/add.png";
import minus from "../../assets/minus.png";
import "../Books/books.css";

const SavedIcon = ({ book }) => {
  const { savedItems, deleteSavedItem, addSavedItem } =
    useSavedContext(SavedContext);

  const checkSavedBook = (id) => {
    const boolean = savedItems.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="icons">
      {checkSavedBook(book.id) ? (
        <img
          src={minus}
          alt="minus-icon"
          onClick={() => {
            deleteSavedItem(book.id);
          }}
        />
      ) : (
        <img
          src={add}
          alt="add-icon"
          onClick={() => {
            addSavedItem(book);
          }}
        />
      )}
    </div>
  );
};

export default SavedIcon;
