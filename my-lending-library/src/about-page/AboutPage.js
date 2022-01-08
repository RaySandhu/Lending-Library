import { useEffect } from "react"
import Navbar from "../Navbar"
import UserCorners from "./UserCorners"
import "./aboutPage.css"
import BookSearch from "../BookSearch"

function AboutPage() {
    useEffect(() => {
        fetch('/api/test')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    })

    return (
        <div>
            <Navbar />
            <div className="about-body">
                <div className="about-writing">
                    <h2>About the Lending Library</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan arcu eget ullamcorper tincidunt. Sed rutrum tincidunt ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum aliquam enim id lectus aliquam accumsan. Mauris ac sem magna. In vel convallis erat, eget lacinia risus.</p>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan arcu eget ullamcorper tincidunt. Sed rutrum tincidunt ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum aliquam enim id lectus aliquam accumsan. Mauris ac sem magna. In vel convallis erat, eget lacinia risus.</p>
                    <BookSearch />
                </div>
                <UserCorners />
            </div>
        </div>
    )
}

export default AboutPage
