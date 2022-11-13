/* eslint-disable no-unused-vars */
import "./styles/App.css";
import "./styles/form/form.css";
import "./styles/meta/meta.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import MetaPage from "./pages/MetaPage";
import PlacePage from "./pages/PlacePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/meta" element={<MetaPage />} />
        <Route path="/meta/place" element={<PlacePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
