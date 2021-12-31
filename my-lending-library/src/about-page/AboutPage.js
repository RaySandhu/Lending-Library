import Navbar from "../Navbar"
import UserCorners from "./UserCorners"
import "./aboutPage.css"
import "./form-modal/modal.css"

export default function AboutPage() {
    return (
        <div>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet"/>
            </head>
            <Navbar />
            <div className="about-body">
                <div className="about-writing">
                    <h2>About the Lending Library</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan arcu eget ullamcorper tincidunt. Sed rutrum tincidunt ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum aliquam enim id lectus aliquam accumsan. Mauris ac sem magna. In vel convallis erat, eget lacinia risus.</p>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan arcu eget ullamcorper tincidunt. Sed rutrum tincidunt ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum aliquam enim id lectus aliquam accumsan. Mauris ac sem magna. In vel convallis erat, eget lacinia risus.</p>
                </div>
                <UserCorners />
            </div>
        </div>
    )
}
