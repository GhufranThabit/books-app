import React, { useState, useEffect } from "react";
import video from "../../assets/downloads.mp4";
import "../../App.css";
import "./header.css";
import SearchBox from "./SearchBox";
import IsLoading from "../IsLoading";
const Header = () => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="header">
      <video src={video} autoPlay loop />
      <div className="container">
        <h2>Welcome To Your Home Library</h2>
        <br />
        <p>search for your favorite books</p>
        <br />
        <SearchBox />
      </div>
    </div>
  );
};

export default Header;
