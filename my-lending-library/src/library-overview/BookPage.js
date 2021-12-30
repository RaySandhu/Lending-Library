import { useParams } from "react-router-dom"
import { getBook } from "../data"
import Navbar from "../Navbar"

function BookPage(){
    let params = useParams()

    const book = getBook(params.bookId)

    return(
        <div>
            <Navbar />
            <h1>{book.title}</h1>
        </div>
    )
}

export default BookPage
