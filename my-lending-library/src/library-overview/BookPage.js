import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "../Navbar"

function BookPage(){

    const { bookId } = useParams()
    const [book, setBook] = useState({})
    const [author, setAuthor] = useState("")
    const [usableDescription, setUsableDescription] = useState("")
    const [readMore, setReadMore] = useState(false)

    useEffect(() => {
        async function getBookData() {
            let retrieve =  await fetch("/api/retrieveBook", {
                method: "POST",
                body: JSON.stringify({
                    id: bookId
                })
            })
            let response = await retrieve.json()
    
            setBook(response.data)
            setAuthor(response.data.author[0])
            setUsableDescription(response.data.description)
            return
        }
        getBookData()
    }, [bookId])

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
    console.log(book)
    return(
        <div>
            <Navbar />
            <h1>{book.title}</h1>
            <h2>{author} * {book.publication_date}</h2>
            <img src={book.thumbnail} alt="Book thumbnail" />
            <h3>About this Book</h3>
            <div>
                {nonShowingDescription.length>5 
                        ? <div> 
                            {readMore 
                                ? <div> 
                                    {nonShowingDescription}<br/> 
                                    <button onClick={() => setReadMore(!readMore)}> 
                                        {readMore && "Show Less"}
                                    </button>
                                  </div>
                                : <div> 
                                    {showingDescription}... <br/>
                                    <button onClick={() => setReadMore(!readMore)}> 
                                        {!readMore && "Show More"}
                                    </button>
                                  </div>
                                  // can condense this button into one variable later
                                    //also to fix displaying the button when uneccesary
                            }
                          </div>
                        : usableDescription
                    }
            </div>
            <h3>Household Rating: {"⭐".repeat(book.personal_rating)}</h3>
            <h3>Our Thoughts</h3>
            <p>{book.personal_review}</p>
        </div>
    )
}

export default BookPage
