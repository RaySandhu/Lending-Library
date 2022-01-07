import Navbar from "../Navbar"
import UserCorners from "./UserCorners"
import "./aboutPage.css"
import APIRender from "../mock-responses/APIRender.js"
import { useEffect } from "react"

function AboutPage() {

    //next 4 lines are the basics of what is needed for a full API search
        //storing added books will go in DB presumably
    const {results, searchValue, searching, lookUp, isLoaded, error} = APIRender()
    
    useEffect(()=> {
        lookUp()
        console.log(results)
    }, [searchValue])


    return (
        <div>
            <Navbar />
            <div className="about-body">
                <div className="about-writing">
                    <h2>About the Lending Library</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan arcu eget ullamcorper tincidunt. Sed rutrum tincidunt ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum aliquam enim id lectus aliquam accumsan. Mauris ac sem magna. In vel convallis erat, eget lacinia risus.</p>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan arcu eget ullamcorper tincidunt. Sed rutrum tincidunt ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum aliquam enim id lectus aliquam accumsan. Mauris ac sem magna. In vel convallis erat, eget lacinia risus.</p>
                </div>
                <form>
                    <input type="text" defaultValue="" onChange={searching}/>
                </form>
                <UserCorners />
            </div>
        </div>
    )
}

export default AboutPage
