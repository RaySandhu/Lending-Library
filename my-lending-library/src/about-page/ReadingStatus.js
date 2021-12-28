import useModal from "../useModal"
import { useEffect } from 'react'
import SampleModal from "./form-modal/FormModal"

function ReadingStatus(props) {
    const recommendationsParagraphs = props.recommendations.map(book => <p key={book}>{book}</p>)

    const {isShowing, toggle} = useModal()
    
    useEffect(() => {
        if(isShowing) {
            console.log("Modal Showing")
        } else console.log("Modal Hidden")
    }, [isShowing])

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
                    key={props.user}
                    user={props.user}
                    current = {props.current}
                    next = {props.next}
                    isShowing={isShowing}
                    hide={toggle}
                />
                <button className="update-button" onClick={toggle}>Update {props.user}'s Status</button>
            </div>
        </div>
    )
}

export default ReadingStatus
