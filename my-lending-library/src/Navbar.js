import { Link } from "react-router-dom"
import { FaHome, FaBook } from "react-icons/fa";


function Navbar() {
    return (
        <div className="navbar">
            <div> <Link to="/"  ><FaHome className= "home-icon" /></Link></div>
            <div className = "title"> <h1 >The Lending Library</h1> </div>
            <div style={{order: 3}} > 
                <Link to="/library" >
                    {//can add open book icon when on library page}
                    <FaBook className= "library-icon"/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar