import React from "react";
import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setShowSidebar(!showSidebar);
    if (showSidebar === false) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "visible";
    }
  };

  return (
    <AppContext.Provider
      value={{
        handleClick,
        showSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
