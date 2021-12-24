import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import AboutPage from "./AboutPage"
import './App.css';
import LibraryOverviewPage from "./LibraryOverviewPage"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/library" element={<LibraryOverviewPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
