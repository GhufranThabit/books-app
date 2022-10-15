import React from "react";
import BooksCard from "./BooksCard";
import "./books.css";
import useFetch from "../hooks/useFetch";
import IsLoading from "../IsLoading";
import { useSearchContext } from "../../context/SearchContext";
import Error from "../Error";

const BooksList = () => {
  const { search } = useSearchContext();

  let url = `https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDWPUzECPx7O59PIBOaC72wVv1n8l05J18&maxResults=20`;
  if (search.length === 0 || search === undefined) {
    url = `https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDWPUzECPx7O59PIBOaC72wVv1n8l05J18&maxResults=20`;
  } else {
    url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDWPUzECPx7O59PIBOaC72wVv1n8l05J18&maxResults=20`;
  }

  const { result: books, error, isLoading } = useFetch(url);

  return (
    <div>
      {isLoading ? (
        <IsLoading />
      ) : (
        <div>
          {error ? (
            <Error />
          ) : (
            <div className="books-container">
              {books.map((book) => (
                <div className="Books-items">
                  <BooksCard book={book} key={book.id} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BooksList;
