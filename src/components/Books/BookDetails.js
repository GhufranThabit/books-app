import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import IsLoading from "../IsLoading";
import Error from "../Error";
import "./details.css";
import poster from "../../assets/books-img.jpg";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyDWPUzECPx7O59PIBOaC72wVv1n8l05J18`;
  // const { data: book, error, isLoading } = useFetch(url);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setBook(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(true);
      }
    })();
  }, [url]);

  // return (
  //   <div className="details">
  //     {error ? (
  //       <Error text="Book details can not be loaded" />
  //     ) : (
  //       <div className="box">
  //         <img src={poster} alt={poster} />
  //         <div className="info">
  //           <h1>{book.volumeInfo.title}</h1>
  //           <h3>{`Author: ${book.volumeInfo.authors}`}</h3>
  //           <h3>{`Published date: ${book.volumeInfo.publishedDate}`}</h3>
  //           <h3>{`Number of pages: ${book.volumeInfo.pageCount}`}</h3>
  //           <a href={book.volumeInfo.previewLink}>
  //             <button>More</button>
  //           </a>
  //         </div>
  //         <h4 className="description">{book.volumeInfo.description}</h4>
  //       </div>
  //     )}
  //   </div>
  // );

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
                src={book.volumeInfo.imageLinks.smallThumbnail}
                alt={book.volumeInfo.title}
              />
              <div className="info">
                <h1>{book.volumeInfo.title}</h1>
                <h3>{`Author: ${book.volumeInfo.authors}`}</h3>
                <h3>{`Published date: ${book.volumeInfo.publishedDate}`}</h3>
                <h3>{`Number of pages: ${book.volumeInfo.pageCount}`}</h3>
                <a href={book.volumeInfo.previewLink}>
                  <button>More</button>
                </a>
              </div>
              <h4 className="description">{book.volumeInfo.description}</h4>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookDetails;
