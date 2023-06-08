import { useState } from "react";
import AppContextProvider from "./contexts/globalContext";
import "./App.css";
import ProductsContainer from "./components/Products/ProductsContainer";
import FeaturedContainer from "./components/Products/FeaturedContainer";
import SideBar from "./components/sidebar/SideBar";
import Navbar from "./components/navbar/navbar";
function App() {
  return (
    <AppContextProvider>
      <Navbar />
      <SideBar />
      <FeaturedContainer />
      <ProductsContainer />
      <FeaturedContainer />
      <ProductsContainer />
      <ProductsContainer />
    </AppContextProvider>
  );
}

export default App;
