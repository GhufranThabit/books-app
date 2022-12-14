import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IsLoading from "../IsLoading";
import Error from "../Error";
import SavedIcon from "../Saved-Books/SavedIcon";
import "./details.css";
import poster from "../../assets/books.jpg";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyDWPUzECPx7O59PIBOaC72wVv1n8l05J18`;

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setBook(data);
        setIsLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    })();
  }, [url]);

  return (
    <div className="details">
      {isLoading ? (
        <IsLoading />
      ) : (
        <div>
          {error ? (
            <Error text="Book details can not be loaded" />
          ) : (
            <div className="box">
              <img
                className="book-img"
                src={
                  book.volumeInfo.imageLinks === undefined
                    ? poster
                    : book.volumeInfo.imageLinks.thumbnail
                }
                alt={book.volumeInfo.title}
              />

              <div className="info">
                <h1>{book.volumeInfo.title}</h1>
                <h3>{book.volumeInfo.publishedDate}</h3>
                <h3>{`Author: ${book.volumeInfo.authors}`}</h3>
                <h3>{`Number of pages: ${book.volumeInfo.pageCount}`}</h3>
                <SavedIcon book={book} />
                <a
                  href={book.volumeInfo.previewLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  <button>More</button>
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookDetails;
