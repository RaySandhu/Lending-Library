import { useState } from "react"

function ReadingStatusForm(props) {   
    const [nextRead, setNextRead] = useState(props.userInfo.next)
    const [currentRead, setCurrentRead] = useState(props.userInfo.current)
    const [reccRead1, setReccRead1] = useState(props.userInfo.recommendations[0])
    const [reccRead2, setReccRead2] = useState(props.userInfo.recommendations[1])
    const [reccRead3, setReccRead3] = useState(props.userInfo.recommendations[2])
    const [tally, setTally] = useState(props.userInfo.tally)

    async function updateReadingCorner() {
        setTally(10)
        
        let retrieve = await fetch("/api/readingCornerUpdate", {
            method: "POST",
            body: JSON.stringify({
                        "user": props.userInfo.user,
                        "recommendations": [
                            reccRead1,
                            reccRead2,
                            reccRead3
                        ],
                        "next": nextRead,
                        "current": currentRead,
                        "readingTally": tally
                    })
        })
    
        let sentUpdate = await retrieve.json()
        console.log(sentUpdate)
        return sentUpdate
    }

    function handleSubmit(event) {
        console.log("Submitted next read: " + nextRead)
        event.preventDefault()
        updateReadingCorner().then(res => res)
        props.hideModal()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> What are your top recommendations to friends and family?
                    <br/>
                    <br/>
                    <input
                        type="text"
                        id="reccRead1"
                        defaultValue={reccRead1}
                        onChange={event => {setReccRead1(event.target.value)}}
                    />
                    <input
                        type="text"
                        id="reccRead2"
                        defaultValue={reccRead2}
                        onChange={event => {setReccRead2(event.target.value)}}
                    />
                    <input
                        type="text"
                        id="reccRead3"
                        defaultValue={reccRead3}
                        onChange={event => {setReccRead3(event.target.value)}}
                    />
                </label>
                <br/>
                <br/>
                <label> What book are you planning on reading next?
                    <br/>
                    <br/>
                    <input
                        type="text"
                        id="nextRead"
                        defaultValue={nextRead}
                        onChange={event => {setNextRead(event.target.value)}}
                    />
                </label>
                <br/>
                <br/>
                <label> What book are you currently reading?
                    <br/>
                    <br/>
                    <input
                        type="text"
                        id="currentRead"
                        defaultValue={currentRead}
                        onChange={event => {setCurrentRead(event.target.value)}}
                    />
                </label>
                <br/>
                <br/>
                <label> How many books have you read this year?
                    <br/>
                    <br/>
                    <input
                        type="number"
                        id="nextRead"
                        defaultValue={tally}
                        onChange={event => {setTally(event.target.value)}}
                    />
                </label>
                
                <input type="submit" value="Submit" className="update-button"/>
            </form>
        </div>
    )
}

export default ReadingStatusForm
