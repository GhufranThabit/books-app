import React from "react";
import BooksCard from "./BooksCard";
import "./books.css";
import useFetch from "../../hooks/useFetch";
import IsLoading from "../IsLoading";
import { useSearchContext } from "../../context/SearchContext";
import Error from "../Error";
import useDebounce from "../../hooks/useDebounce.tsx";

const BooksList = () => {
  const { search } = useSearchContext();
  const debouncedValue = useDebounce(search, 500);

  let url = `https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDWPUzECPx7O59PIBOaC72wVv1n8l05J18&maxResults=20`;
  if (search === "") {
    url = `https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDWPUzECPx7O59PIBOaC72wVv1n8l05J18&maxResults=20`;
  } else if (debouncedValue) {
    url = `https://www.googleapis.com/books/v1/volumes?q=${debouncedValue}&key=AIzaSyDWPUzECPx7O59PIBOaC72wVv1n8l05J18&maxResults=20`;
  }

  const { result: books, error, isLoading } = useFetch(url);

  return (
    <div>
      {isLoading ? (
        <IsLoading />
      ) : (
        <div>
          {error ? (
            <Error text="Books can not be loaded" />
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
