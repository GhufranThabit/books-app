import React from "react";
import { Link } from "react-router-dom";
import "./books.css";
import SavedIcon from "../Saved-Books/SavedIcon";
import poster from "../../assets/books.jpg";

const BooksCard = ({ book }) => {
  return (
    <div className="card">
      <Link to={`/${book.id}`}>
        <img
          className="book-img"
          src={
            book.volumeInfo.imageLinks === undefined
              ? poster
              : book.volumeInfo.imageLinks.thumbnail
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
