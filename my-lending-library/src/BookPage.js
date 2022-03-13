import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import useModal from "./useModal"
import Navbar from "./Navbar"
import EditBookModal from "./EditBookModal"

//#TODO - BIG CSS overhaul (make list of what exactly)

function BookPage(){

    const { bookId } = useParams()
    const [book, setBook] = useState({})
    const [author, setAuthor] = useState("")
    const [usableDescription, setUsableDescription] = useState("")
    const [readMore, setReadMore] = useState(false)

    const { isShowing, toggle } = useModal()

    useEffect(() => {
        console.log(isShowing)
    }, [isShowing])

    useEffect(() => {
        async function getBookData() {
            let retrieve =  await fetch("/api/retrieveBook", {
                method: "POST",
                body: JSON.stringify({
                    id: bookId
                })
            })
            let response = await retrieve.json()
            console.log(response)
    
            setBook(response.data)
            setAuthor(response.data.author)
            setUsableDescription(response.data.description)
            return
        }
        getBookData()
    }, [bookId])

    async function deleteBook() {
        let sendReq = await fetch("/api/deleteBook", {
            method: "POST",
            body: JSON.stringify({
                id: bookId
            })
        })
        console.log(sendReq)
    }

    let showingDescription = ""
    let nonShowingDescription = ""
    for(var i in usableDescription) {
        if (typeof (usableDescription[i]) === "string") {
            if(showingDescription.length<1000) {
                showingDescription = showingDescription.concat(usableDescription[i])
            }
            nonShowingDescription = nonShowingDescription.concat(usableDescription[i])
        }
    }
    return(
        <div>
            <Navbar />
            <title className="book-page-title">{book.title}</title>

            <div className="book-page-info">                                    
                <div style={{maxWidth:"33%"}}>
                    <h3 style={{fontWeight:900, fontSize:"1.5rem"}}>About this Book</h3>
                    {nonShowingDescription.length>5 
                        ? <div> 
                            {readMore 
                                ? <div> 
                                    {nonShowingDescription}<br/> 
                                </div>
                                : <div> 
                                    {showingDescription}... <br/>
                                </div>
                                // can condense this button into one variable later
                                    //also to fix displaying the button when uneccesary
                            }
                            <br/>
                            {
                                showingDescription === nonShowingDescription ?
                                    null :
                                    <button onClick={() => setReadMore(!readMore)}> 
                                                {readMore ? "Show less" : "Show more"}
                                    </button> 
                            }
                        </div>
                        : <div>
                            Description is currently unavailable due to Ray's inadequacies as a coder
                            {/* usabledescription is unable to read because its formatted as a nested object; unlike arrays. */}
                        </div>
                    }
                </div>
                
                <img className="book-page-info-image" src={book.thumbnail} alt="Book thumbnail" />

                <div style={{minWidth:"33%"}}>
                    <h3 style={{fontWeight:900, fontSize:"1.5rem"}}>Our Thoughts</h3>
                    <p>{book.personal_review}</p>
                </div>
            </div>

            <div className="book-page-horizontal-menu">
                <h2> Authored by {author} and Published on {book.publication_date}</h2>
                <h3 style={{paddingTop:5}}>Household Rating: {"⭐".repeat(book.personal_rating)}</h3>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <button className='add-button' onClick={() => console.log("Checking this Book out")} >Check Out</button>
                    <button className='add-button' onClick={() => toggle()} >Edit Book Information</button>
                    <Link style = {{textDecoration: "none"}}to={`/library`} >
                        <button className='add-button' onClick={() => deleteBook()} >Delete Book</button>
                    </Link>
                </div>
            </div>
            <EditBookModal 
                key = {bookId}
                isShowing = {isShowing}
                book = {book}
                author = {author}
                description = {nonShowingDescription}
                hide = {toggle}
            /> 
        </div>
    )
}

export default BookPage
