import React from "react";
import searchIcon from "../../assets/icons8-search.svg";
import { useSearchContext } from "../../context/SearchContext";

const SearchBox = () => {
  const { search, handleSearch, handleSubmit } = useSearchContext();

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-wrapper">
        <input
          type="search"
          value={search}
          name="q"
          onChange={handleSearch}
        ></input>
        <img
          className="search-icon"
          src={searchIcon}
          alt="search-icon"
          onClick={handleSubmit}
          type="submit"
        />
      </form>
    </div>
  );
};

export default SearchBox;
