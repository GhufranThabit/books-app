import React from "react";
import video from "../../assets/downloads.mp4";
import "../../App.css";
import "./header.css";
import SearchBox from "./SearchBox";

const Header = () => {
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
