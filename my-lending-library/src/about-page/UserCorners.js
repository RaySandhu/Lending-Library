import ReadingStatus from "./ReadingStatus"
import userCornerResponse from "./../mock-responses/user-corners.json"


function UserCorners() {
    const readingStatuses = userCornerResponse.map(userResponse =>
        <ReadingStatus
            key = {userResponse.user}
            user = {userResponse.user}
            current = {userResponse.current}
            next = {userResponse.next}
            recommendations = {userResponse.recommendations}
        />
    )


    return (
        <div className="sidebar">
            {readingStatuses}
        </div>
    )
}

export default UserCorners
