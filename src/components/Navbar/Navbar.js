import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import "./navbar.css";
// import searchIcon from "../../assets/icons8-search.svg";
import booksIcon from "../../assets/books-icon.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="right-nav">
        <NavLink to="/">
          <img className="books-icon" src={booksIcon} alt="books-icon" />
        </NavLink>
        <NavLink className="nav-link" to="/">
          <p>Books & Co </p>
        </NavLink>
      </div>

      <div className="left-nav">
        <NavLink className="nav-link" to="/collection">
          Collection
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
