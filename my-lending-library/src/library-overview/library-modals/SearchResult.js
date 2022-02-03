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
    const [description, setDescription] = useState("")
    const [readMore, setReadMore] = useState(false)
    const [thumbnail, setThumbnail] = useState("")

    
    useEffect(() => {
        async function resultById(newBookId) {
            let response = await fetch(`https://www.googleapis.com/books/v1/volumes/${newBookId}?key=${process.env.REACT_APP_SECRET_API_KEY}`)
            let idResponse = await response.json()
            setBookInfo(idResponse.volumeInfo) 
            setThumbnail(idResponse.volumeInfo.imageLinks.thumbnail)
            setDescription(idResponse.volumeInfo.description)
    
        }
        resultById(newBookId)
    }, [])
    console.log(description)
    let usableDescription = parse(description)
    console.log(usableDescription)
    let showingDescription = ""
    let nonShowingDescription = ""
    for(var i in usableDescription) {
        if (typeof (usableDescription[i]) !== "object") {
            console.log(usableDescription[i].length)
            if(showingDescription.length<500) {
                showingDescription = showingDescription.concat(usableDescription[i])
                console.log(showingDescription.length)
            }
            nonShowingDescription = nonShowingDescription.concat(usableDescription[i])
        } 
    }
    

    const bookCoverStyle = {
        float: "left",
        marginRight: 20,
        marginBottom: 20,
        height: 350,
        width: 200
    }
    const descriptionstyle = {
        
    }
    

    return(
        <div>
            <h1 style={{fontFamily:"Verdana"}}>{bookInfo.title}</h1><br/>
            <img src={thumbnail} alt= "Book Cover" style={bookCoverStyle}/><br/>
            {/* <input type="text" id="api-description" name="api-desctription" maxLength="200" value={usableDescription} /><br/> <br/> */}
            <div style={descriptionstyle}>
                <h2>Book Description: </h2>
                <div>{nonShowingDescription.length>5 
                        ? <div> 
                            {readMore 
                                ? <div> {nonShowingDescription} 
                                        <button onClick={() => setReadMore(!readMore)}> 
                                        {readMore && "Show Less"}
                                        </button>
                                  </div>
                                : <div> {showingDescription} 
                                        <button onClick={() => setReadMore(!readMore)}> 
                                        {!readMore && "Show More"}
                                        </button>
                                  </div>
                            }
                          </div>
                        : usableDescription
                        // <input type="text" id="bookDescription" defaultValue={"No Description Found; Please enter your own"}></input>
                    }
                </div>
            </div>
            <br/>
            <button onClick={hide}> Return to Library </button>
        </div>
    )
}

export default SearchResult