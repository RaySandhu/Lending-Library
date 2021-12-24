import SearchBar from "./SearchBar"
import LibraryOverviewPage from "./LibraryOverviewPage"
import mockGoogleVolume from "./mock-responses/mock-google-volume.json"
import UserCorners from "./UserCorners"
import { Link } from "react-router-dom";

import './App.css'
import Navbar from "./Navbar";

export default function App(props) {

  return (
    <div>
        <Navbar />
        <p>{mockGoogleVolume.volumeInfo.title}</p>
        <div className="sidebar" >  
          <UserCorners />
        </div>
        <LibraryOverviewPage />

    </div>
  )
}
