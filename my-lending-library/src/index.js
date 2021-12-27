import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import AboutPage from "./APFolder/AboutPage"
import './App.css';
import LibraryOverviewPage from "./LOFolder/LibraryOverviewPage"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/library" element={<LibraryOverviewPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
