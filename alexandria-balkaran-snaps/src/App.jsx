import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommentsPage from "./pages/CommentsPage/CommentsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo/:id" element={<CommentsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
