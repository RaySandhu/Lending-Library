import { useState, useEffect } from "react"
import { getUserCornerResponse } from "../data"
import ReadingStatus from "./ReadingStatus"

function UserCorners() {

    const [userInfo, setUserInfo] = useState([])

    let dbIndexes = ["RaysCornerIndex", "JoesCornerIndex"]
    let cornerInfo = []
    dbIndexes.forEach(async index => { 
            const res = await getUserCornerResponse(index)
            const response = await res[0]
            cornerInfo.push(response)
        })
    
 
    console.log(cornerInfo)
    // const readingStatuses = userInfo.map(userResponse =>
    //     <ReadingStatus
    //         key = {userResponse.user}
    //         user = {userResponse.user}
    //         current = {userResponse.current}
    //         next = {userResponse.next}
    //         recommendations = {userResponse.recommendations}
    //         tally = {userResponse.readingTally}
    //     />
    // )

    return (
        <div className="sidebar">
            {/* {readingStatuses} */}
        </div>
    )
}

export default UserCorners
