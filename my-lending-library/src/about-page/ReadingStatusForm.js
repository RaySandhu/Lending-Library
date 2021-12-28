import React, { useState, useEffect } from "react"

function ReadingStatusForm(props) {   

    const [nextRead, setNextRead] = useState("Blood of Elves")
    const [reccRead1, setReccRead1] = useState("Deep Work")
    const [reccRead2, setReccRead2] = useState("So Good They Can't Ignore You")
    const [reccRead3, setReccRead3] = useState("A World Without Email")
    // const [pastRead, setPastRead] = useState(20)

    function handleSubmit() {
        setReccRead1(reccRead1.value)
    }

    useEffect(() => {
        console.log(reccRead1)
    }, [reccRead1])

    return (
        <div>
            <form>
                <h2>Status Update for {props.user}</h2>
                <label> What are your top recommendations to friends and family? </label><br/>
                <input
                    type="text"
                    id="reccRead1"
                    defaultValue={reccRead1}
                    onChange={event => {setReccRead1(event.target.value)}}
                /> <br/>
                <input
                    type="text"
                    id="reccRead2"
                    defaultValue={reccRead2}
                    onChange={event => {setReccRead2(event.target.value)}}
                /> <br/>
                <input
                    type="text"
                    id="reccRead3"
                    defaultValue={reccRead3}
                    onChange={event => {setReccRead3(event.target.value)}}
                /> <br/><br/>

                <label> What book are you planning on reading next? </label><br/>
                <input
                    type="text"
                    id="nextRead"
                    defaultValue={nextRead}
                    onChange={event => {setNextRead(event.target.value)}}
                /><br/><br/>

                <label> Did you finish {props.current}? </label><br/>
                <input 
                    type="radio"
                    id="Finished"
                    value="Yes"
                /> Yes <br/>
                <input
                    type="radio"
                    id="Unfinished"
                    value="No"
                /> No <br/><br/>
                
                
                {/*conditional render further questions if No is checked
                    are you beginning your next book instead?
                    Yes - = Book tally increased
                    No - I'm still reading*/}
                
                <input type="submit" onSubmit={handleSubmit} /> 
            </form>
        </div>
    )
}

export default ReadingStatusForm
