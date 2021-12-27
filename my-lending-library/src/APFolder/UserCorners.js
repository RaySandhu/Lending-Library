import ReadingStatus from "./ReadingStatus"

function UserCorners() {
    return (
        <div className="sidebar">
            <div>
                <h2>Ray's Corner</h2>
                <ReadingStatus />
            </div>

            <div>
                <h2>Joe’s Corner</h2>
                <ReadingStatus />
            </div>
        </div>
    )
}

export default UserCorners