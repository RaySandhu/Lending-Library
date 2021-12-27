import { useState } from "react"

function ReadingStatus(props) {
    //contains all four sections of Ray and Joe reading status
    //all info derived from React form and stored in state
    const [currRead, setCurrRead] = useState("The Wind-Up Bird Chronicle")
    const [nextRead, setNextRead] = useState("Blood of Elves")
    const [reccRead, setreccRead] = useState("Deep Work")
    const [pastRead, setPastRead] = useState(20)

    return (
        <div className="sidebar-content">
            <div>
                <h3>Currently Reading</h3>
                <p>{currRead}</p>
            </div>
            <div>
                <h3>Reading Next</h3>
                <p>{nextRead}</p>
            </div>
            <div>
                <h3>Top Recommendations</h3>
                <p>{reccRead}</p>
            </div>
            <div>
                <h3>Books Read in 2022</h3> {/*can inclde Date func to tally year*/}
                <p>{pastRead}</p>
            </div>

        </div>
    )
}

export default ReadingStatus