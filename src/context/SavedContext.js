import React, { createContext, useContext, useState } from "react";

export const SavedContext = createContext();
export const useSavedContext = () => useContext(SavedContext);

export const SavedContextProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([]);

  const deleteSavedItem = (id) => {
    setSavedItems(savedItems.filter((item) => item.id !== id));
  };
  const addSavedItem = (item) => {
    setSavedItems([...savedItems, item]);
  };
  const inSavedList = (book) => savedItems.includes(book);

  return (
    <SavedContext.Provider
      value={{ savedItems, deleteSavedItem, addSavedItem, inSavedList }}
    >
      {children}
    </SavedContext.Provider>
  );
};

export default SavedContextProvider;
