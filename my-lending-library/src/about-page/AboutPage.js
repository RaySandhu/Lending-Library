import Navbar from "../Navbar"
import UserCorners from "./UserCorners"
import "./aboutPage.css"

function AboutPage() {

    return (
        <div>
            <Navbar />

            
            <div className="about-body">
                <div className="about-writing">
                    <h2>About the Lending Library</h2>
                    <p style={{textIndent: "45px"}}>
                        This web app is my next step in increasing the complexity of my learning in software development. The idea for this 
                        project came from our tendency to purchase books in excess and my innate need to organize. The goal is to create a 
                        personal library to keep track of all our books as we purchase new ones, lend out our current ones, or donate them
                        away! <br/>
                    </p>
                    <p style={{textIndent: "45px"}}>
                            Being the social couple that we are, it was also a fun idea for me to include a slightly interactive component 
                        to this challenge by having a live "Reading Corner" for Joe and myself to show our friends (or any interested parties)
                        how our reading journey's are faring. I hope build on this app for practice and enjoyment for a while to come!
                    </p>
                    <h2>About Us</h2>
                    <p style={{textIndent: "45px"}}>
                            Joe and myself, Ray, are a young couple in Calgary, AB. We are both professional registered nurses always looking for 
                        projects to dedicate ourselves to outside of work. Joe is currently a returning student at the University of Calgary
                        in the Faculty of Anthropology and I am teaching myself programming with the help of my mentors, Brian N and Sunny N. <br/>
                    </p>
                    <p style={{textIndent: "45px"}}>
                            We have been avid readers since the start (although Joe will put most of us to shame) and are suckers for a good 
                        rifle through the local bookstore. As a product of that, we are well on our way to hoarding a library unreasonably large for
                        a small apartment. My own coping strategy until a better housing situation for the books is to lend and share the wealth with 
                        friends and family!
                    </p>

                </div>
                
                <UserCorners />
            </div>
        </div>
    )
}

export default AboutPage
