import { useState } from 'react'
import LibraryBookCard from "./LibraryBookCard"
import Navbar from '../Navbar'
import { getLibrary } from '../data'

function LibraryOverviewPage() {
    
    const [query, setQuery] = useState("")

    let bookCards = getLibrary()
        .filter(book => book.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        .map(book => 
            <LibraryBookCard
                key={book.id}
                id={book.id}
                title={book.title}
                thumbnail={book.thumbnail}
                rating={book.personal_rating}
            />
        )

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
                {bookCards}
            </div>
        </div>
    )
}

export default LibraryOverviewPage
