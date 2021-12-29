import { useState, useEffect } from 'react'
import LibraryBookCard from "./LibraryBookCard"
import library from "../mock-responses/library.json"
import Navbar from '../Navbar'

function LibraryOverviewPage(props) {
    
    const [query, setQuery] = useState("")

    const bookCards = library
        .map(book => 
            <LibraryBookCard
                key={book.title} //can use ISBN numbers
                title={book.title}
                thumbnail={book.thumbnail}
                rating={book.personal_rating}
            />
        )

    const [filteredBookCards, setFilteredBookCards] = useState(bookCards)

    useEffect(() => {
        setFilteredBookCards(bookCards.filter(book => book.key.toLowerCase().includes(query.toLowerCase())));
        console.log(filteredBookCards);
    }, [query])

    return (
        <div>
            <Navbar />
            <h1>Welcome to Our Library</h1>

            <div className="horizontal-menu">
                <label htmlFor="search">Search</label>
                <input type="search" name="search" onChange={e => setQuery(e.target.value)}/>

                <button>Add New</button>

                <select>
                    <option value="">Alphabetical</option>
                    <option value="">Alphabetical (reverse)</option>
                    <option value="">Date last read </option>
                    <option value="">Rating </option>                    
                </select>
            </div>

            <div className="book-gallery">
                {filteredBookCards}
            </div>
        </div>
    )
}

export default LibraryOverviewPage
