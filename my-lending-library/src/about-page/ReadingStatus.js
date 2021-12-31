import useModal from "../useModal"
import SampleModal from "./form-modal/FormModal"

function ReadingStatus(props) {
    const recommendationsParagraphs = props.recommendations.map(book => <p key={book}>{book}</p>)
    const {user, current, next, recommendations} = props
    const userInfo = {user, current, next, recommendations}
    const {isShowing, toggle} = useModal()

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

                <SampleModal 
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
