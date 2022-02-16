import { useEffect, useState } from "react"
import { getUserCornerResponse } from "../data"
import ReadingStatus from "./ReadingStatus"

function UserCorners() {

    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        let dbIndexes = ["JoesCornerIndex", "RaysCornerIndex"]
        for(var index in dbIndexes) {
            getUserCornerResponse(dbIndexes[index])
                .then(res => setUserInfo(currentArr => [...currentArr, res[0]]))
        }
    }, [])

    const readingStatuses = userInfo.map(userResponse =>
        <ReadingStatus
            key = {userResponse.user}
            user = {userResponse.user}
            current = {userResponse.current}
            next = {userResponse.next}
            recommendations = {userResponse.recommendations}
            tally = {userResponse.readingTally}
        />
    )

    return (
        <div className="sidebar">
            {readingStatuses}
        </div>
    )
}

export default UserCorners
