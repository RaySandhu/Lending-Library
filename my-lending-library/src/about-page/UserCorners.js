import { useState, useEffect } from "react"
import { getUserCornerResponse } from "../data"
import ReadingStatus from "./ReadingStatus"

function UserCorners() {

    const [userInfo, setUserInfo] = useState([])
    
    useEffect(() => {
        let dbIndexes = ["RaysCornerIndex", "JoesCornerIndex"]
        let cornerInfo = []
        dbIndexes.map(async index => { 
                const res = await getUserCornerResponse(index)
                cornerInfo.push(res[0])
                return res
            })
            setUserInfo(cornerInfo)
        })
    
    console.log(userInfo[0])
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
