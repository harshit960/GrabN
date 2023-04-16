import "./App.css";
import { Fragment } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import Catscroll from "./components/Catscroll";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Footer from "./components/footer";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import searchQuery from "./components/Navbar"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="/Search/:id" element={<SearchResults/>} />
          
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
