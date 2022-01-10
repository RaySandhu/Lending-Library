import useModal from "../useModal"
import CornerModal from "./corner-modal/CornerModal"

function ReadingStatus(props) {
    const recommendationsParagraphs = props.recommendations.map(book => <p key={book}>{book}</p>)
    const {user, current, next, recommendations, tally} = props
    const userInfo = {user, current, next, recommendations, tally}
    const {isShowing, toggle} = useModal()
    var year = new Date().getFullYear()

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
                    <h3>Books Read in {year}</h3> 
                    <p>{props.tally}</p>
                    {/* <p>{props.pastRead}</p> */}
                </div>

                <CornerModal 
                    userInfo = {userInfo}
                    isShowing={isShowing}
                    hide={toggle}
                />
                <button className="update-button" onClick={toggle}>Update {props.user}'s Status</button>
            </div>
        </div>
    )
}

export default ReadingStatus
