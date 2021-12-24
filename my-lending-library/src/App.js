import SearchBar from "./SearchBar"
import LibraryOverviewPage from "./LibraryOverviewPage"
import AboutPage from "./AboutPage"
import mockGoogleVolume from "./mock-responses/mock-google-volume.json"

import { Link } from "react-router-dom";

import './App.css'
import Navbar from "./Navbar";

export default function App(props) {

  return (
    <div>
        <Navbar />
        <AboutPage />
    </div>
  )
}
