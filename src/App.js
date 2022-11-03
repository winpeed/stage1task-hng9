/* eslint-disable no-unused-vars */
import "./styles/App.css";
import "./styles/form/form.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
