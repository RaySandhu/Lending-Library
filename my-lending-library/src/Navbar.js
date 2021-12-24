import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <div>
                <h1 className="title">The Lending Library</h1> 
                <Link to="/about" style={{textAlign: "left"}} >About Page</Link>
                <Link to="/" style={{textAlign: "right"}}>Main Page</Link>
            </div>
        </div>
    )
}

export default Navbar