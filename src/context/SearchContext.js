import React, { useContext, createContext, useState } from "react";

export const SearchContext = createContext();
export const useSearchContext = () => useContext(SearchContext);

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearch(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SearchContext.Provider value={{ search, handleSearch, handleSubmit }}>
      {children}
    </SearchContext.Provider>
  );
};
