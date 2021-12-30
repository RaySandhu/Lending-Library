import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './index.css'

import AboutPage from "./about-page/AboutPage"
import LibraryOverviewPage from "./library-overview/LibraryOverviewPage"
import ReadingStatusForm from './about-page/ReadingStatusForm';
import BookPage from './library-overview/BookPage'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/library" element={<LibraryOverviewPage />} />
      <Route path="/statusSubmitForm" element={<ReadingStatusForm />} />
      <Route path="/book/">
        <Route path=":bookId" element={<BookPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
