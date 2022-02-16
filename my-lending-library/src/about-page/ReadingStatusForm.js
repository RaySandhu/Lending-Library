import { useState } from "react"

function ReadingStatusForm(props) {   
    const [nextRead, setNextRead] = useState(props.userInfo.next)
    const [reccRead1, setReccRead1] = useState(props.userInfo.recommendations[0])
    const [reccRead2, setReccRead2] = useState(props.userInfo.recommendations[1])
    const [reccRead3, setReccRead3] = useState(props.userInfo.recommendations[2])
    const [tally, setTally] = useState(20)

    async function updateReadingCorner() {
        
        let retrieve = await fetch("/api/readingCornerUpdate", {
            method: "POST",
            body: JSON.stringify({
                        "user": props.userInfo.user,
                        "current": props.userInfo.current,
                        "recommendations": [
                            reccRead1,
                            reccRead2,
                            reccRead3
                        ],
                        "next": nextRead,
                        "readingTally": tally
                    })
        })
    
        let sentUpdate = await retrieve.json()
        console.log(sentUpdate)
        return sentUpdate
    }

    // const addTally = (event) => {
    //     if(event.target.value==="Yes") {
    //         setTally(tally++)
    //     }
    // }

    function handleSubmit(event) {
        console.log("Submitted next read: " + nextRead)
        event.preventDefault()
        updateReadingCorner().then(res => res)
        // addTally()
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
                <label> Did you finish {props.userInfo.current}? 
                    <br/>
                    <br/>
                    <input
                        type="radio"
                        name="complete"
                        value="Yes"
                    /> Yes
                    <input
                        type="radio"
                        name="complete"
                        value="No"
                    /> No
                </label>
                <br/>
                <br/>
                {/*conditional render further questions if No is checked
                    are you beginning your next book instead?
                    Yes - = Book tally increased
                    No - I'm still reading*/}
                
                <input type="submit" value="Submit" className="update-button"/>
            </form>
        </div>
    )
}

export default ReadingStatusForm
