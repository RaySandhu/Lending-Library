import { Link } from "react-router-dom"
import ReadingStatusForm from "./ReadingStatusForm"

function ReadingStatus(props) {
    const recommendationsParagraphs = props.recommendations.map(book => <p key={book}>{book}</p>)

    return (
        <div>
            <h2>{props.user}'s Corner</h2>
            <div className="sidebar-content">
                <div>
                    <h3>Currently Reading</h3>
                    <p>{props.current}</p>
                </div>
                <div>
                    <h3>Reading Next</h3>
                    <p>{props.next}</p>
                </div>
                <div>
                    <h3>Top Recommendations</h3>
                    {recommendationsParagraphs}
                </div>
                <div>
                    <h3>Books Read in 2022</h3> {/*can inclde Date func to tally year*/}
                    {/* <p>{props.pastRead}</p> */}
                </div>

                <Link to="/statusSubmitForm" className="update-button" user="Ray">Update {props.user}'s Status</Link>
            </div>
        </div>
    )
}

export default ReadingStatus
