import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./books.css";
import SavedIcon from "../Saved-Books/SavedIcon";
import poster from "../../assets/books-img.jpg";
const BooksCard = ({ book }) => {
  // let bookImage = book.volumeInfo.imageLinks.smallThumbnail; //thumbnail
  return (
    <div className="card">
      <Link to={`/${book.id}`}>
        <img
          className="book-img"
          // src={poster}
          // src={book.volumeInfo.imageLinks.thumbnail}
          src={
            book.volumeInfo.imageLinks.smallThumbnail === "undefined"
              ? poster
              : book.volumeInfo.imageLinks.smallThumbnail
          }
          alt={book.volumeInfo.title}
        />
      </Link>
      <div className="card-bottom">
        <SavedIcon book={book} />
        <a href={book.volumeInfo.previewLink} rel="noreferrer" target="_blank">
          <button>e-book</button>
        </a>
      </div>
    </div>
  );
};

export default BooksCard;
