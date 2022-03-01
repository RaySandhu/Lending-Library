import { useEffect, useState } from "react"
import parse from 'html-react-parser';

function SearchResult({newBookId, hide}) {
    //for some reason, any nested objects cannot be read with useEffect fetchCall and breaks the component before complete rendering
        //specifically updating new state in fetch for all necessary nested values such as for thumbnail, nested in imageLinks
            //ANSWER this is necessary because child variables of the state once state is defined are not stateful; thus, calling on them
            // while the async function is running will result in undefined and will not be updated when fulfilled.
        

    // why is console log called twice on render
        // answered:waiting for async function to complete
    const [bookInfo, setBookInfo] = useState({})
    const [usableDescription, setUsableDescription] = useState([])
    const [author, setAuthor] = useState([])
    const [finalAuthor, setFinalAuthor] = useState("")
    const [thumbnail, setThumbnail] = useState("")


    // const [readMore, setReadMore] = useState(false)
    const [readBy, setReadBy] = useState("")
    const [lastRead, setLastRead] = useState("")
    const [personalReview, setPersonalReview] = useState("")
    const [rating, setRating] = useState(0)

    async function addBookToLib() {
        return fetch('/api/addToLibrary', {
            body: JSON.stringify({
                "id": newBookId,
                "title": bookInfo.title,
                "author": (author.length>1 ? finalAuthor : author),
                "thumbnail": thumbnail,
                "description": usableDescription,
                "publication_date": bookInfo.publishedDate,
                "readBy": readBy,
                "personal_review": personalReview,
                "personal_rating": rating,
                "last_read": lastRead,
                "checked_status": false
            }), 
            method: "POST"
        })
        .then(res => res.json())
        .then(res => console.log(res))
    
    }   
    
    useEffect(() => {
        async function resultById(newBookId) {
            let response = await fetch(`https://www.googleapis.com/books/v1/volumes/${newBookId}?key=${process.env.REACT_APP_SECRET_API_KEY}`)
            let idResponse = await response.json()
            setBookInfo(idResponse.volumeInfo) 
            setThumbnail(idResponse.volumeInfo.imageLinks.thumbnail)
            idResponse.volumeInfo.hasOwnProperty("authors") ?
                setAuthor(idResponse.volumeInfo.authors) :
                setAuthor("No author available")
            setUsableDescription(parse(idResponse.volumeInfo.description))
        }
        resultById(newBookId)
    }, [newBookId])

    let showingDescription = ""
    let nonShowingDescription = ""
    for(var i in usableDescription) {
        if (typeof (usableDescription[i]) === "string") {
            if(showingDescription.length<500) {
                showingDescription = showingDescription.concat(usableDescription[i])
            }
            nonShowingDescription = nonShowingDescription.concat(usableDescription[i])
        }
    }
    
    if(author.length>1) {
        setFinalAuthor(author.splice(author.length-1, 1))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addBookToLib()
        console.log(bookInfo)
        console.log(readBy, lastRead, rating)
        console.log(personalReview)
    }

    const bookInfoTitle = {
        order:1,
        fontFamily:"Verdana",
        fontDisplay: "block"
    }
    const bookCoverStyle = {
        order:2,
        float: "left",
        marginRight: 20,
        marginBottom: 20,
        height: 350,
        width: 200
    }

    const reviewstyle = {
        height: 200,
        width: 700
    }    

    return(
        <div>
            <h1 style={bookInfoTitle}>{bookInfo.title}</h1><br/>
            <figure style={bookCoverStyle}>
                <img src={thumbnail} alt= "Book Cover" height={300} width={175}/>
                <figcaption> by <b>{author.join(", ")}</b> {finalAuthor !== "" && <div> and <b>{finalAuthor}</b></div>}</figcaption>
            </figure>

            <div>
                <h2 style={{marginTop:-20, marginBottom:10, fontSize:30, paddingRight:60}}>Book Description: </h2>
                <div>
                    {usableDescription}
                    {/* {
                        nonShowingDescription.length>5 
                            ? <div> 
                                {readMore 
                                    ? <div> 
                                        {nonShowingDescription} <br/> 
                                    </div>
                                    : <div> 
                                        {showingDescription} <br/>
                                    </div>
                                    
                                    // can condense this button into one variable later
                                        //also to fix displaying the button when uneccesary
                                }
                                {
                                    showingDescription === nonShowingDescription ?
                                        null :
                                        <button onClick={() => setReadMore(!readMore)}> 
                                                    {readMore ? "Show less" : "Show more"}
                                        </button> 
                                }
                            </div>
                            
                            : usableDescription
                    } */}
                </div>
            </div>
            <br/>
                    
            <form className="form-style"> 
                <label htmlFor="readby">
                    Who has read this book?
                    <br/>
                    <select id="readby" onChange={(event) => {setReadBy(event.target.value)}}>
                        <option selectedvalue="Not Read Yet"> Not Read Yet</option>
                        <option value="Ray"> Ray </option>
                        <option value="Joe"> Joe </option>
                        <option value="Both"> Both </option>
                    </select>
                </label> 
                <br/>

                <label htmlFor="lastreadon">
                    When was this book last read? 
                    <br/>
                    <input type="date" id="lastreadon" onChange={event => setLastRead(event.target.value)} />
                </label> 
                <br/>

                <label htmlFor="personalrating">
                    What would you rate this book? <br/>                    
                    <input 
                        type="number" 
                        id="personalrating" 
                        name="personalrating" 
                        min="0" 
                        max="5" 
                        step="0.5" 
                        onChange={(event) => {
                            setRating(event.target.value)
                        }}
                    />
                </label>

                <br/>

            </form>
            <br/>
            <label htmlFor="thoughts"> Enter your thoughts on the book here: </label>
            <textarea 
                style={reviewstyle} 
                id="thoughts" 
                defaultValue="Please enter your personal review here" 
                onChange={event => setPersonalReview(event.target.value)}
            />
            <br/>
            <button type="submit" onClick={handleSubmit} > Add to Library </button>
            <button onClick={hide}> Return to Book Search </button>
        </div>
    )
}

export default SearchResult