import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"


function Navbar() {
    return (
        <div className="navbar">
            <div>
                <h1 className="title">The Lending Library</h1> 
                <Link to="/" style={{textAlign: "left"}} >Home Page</Link>
                <Link to="/library" style={{textAlign: "right"}}>Library</Link>
            </div>
        </div>
    )
}

export default Navbar