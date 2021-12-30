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
            <h2>{book.author} * {book.publication_date}</h2>
            <img src={book.thumbnail} alt="Book thumbnail" />
            <h3>About this Book</h3>
            <p>{book.description}</p>
            <h3>Household Rating: {"⭐".repeat(book.personal_rating)}</h3>
            <h3>Our Thoughts</h3>
            <p>{book.personal_review}</p>
        </div>
    )
}

export default BookPage
