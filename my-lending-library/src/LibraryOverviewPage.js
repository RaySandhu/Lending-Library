import { useState, useEffect } from 'react'
import LibraryBookCard from "./LibraryBookCard"
import library from "./mock-responses/library.json"

function LibraryOverviewPage(props) {
    
    const [query, setQuery] = useState("")

    const bookCards = library
        .map(book => 
            <LibraryBookCard
                key={book.title}
                title={book.title}
                thumbnail={book.thumbnail}
                rating={book.personal_rating}
            />
        )

    useEffect(() => {
        console.log("Query changed to " + query);
    }, [query])

    return (
        <div>
            <h1>Welcome to Our Library</h1>

            <div className="horizontal-menu">
                <label htmlFor="search">Search</label>
                <input type="search" name="search" onChange={e => setQuery(e.target.value)}/>

                <button>Add New</button>

                <select>
                    <option value="">Rating</option>
                    <option value="">Date Read</option>
                    <option value="">Author</option>
                </select>
            </div>

            <div className="book-gallery">
                {bookCards}
            </div>
        </div>
    )
}

export default LibraryOverviewPage
