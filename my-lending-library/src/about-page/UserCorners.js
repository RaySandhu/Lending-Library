import { getUserCornerResponse } from "../data"
import ReadingStatus from "./ReadingStatus"

function UserCorners() {
    const readingStatuses = getUserCornerResponse().map(userResponse =>
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
