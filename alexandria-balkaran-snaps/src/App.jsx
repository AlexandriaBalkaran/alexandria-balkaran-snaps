import React, { useState } from "react";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import photos from "./data/photos.json";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import FilteredPhotos from "./components/FilteredPhotos/FilteredPhotos";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      {/* <Header /> */}
      <HomePage></HomePage>
      {/* <Hero /> */}
      {/* <Footer /> */}

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo/:id" element={<FilteredPhotos />} />
      </Routes>
    </BrowserRouter> */}
    </>
  
  );
}

export default App;