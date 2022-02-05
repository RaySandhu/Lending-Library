import { useEffect, useState } from 'react'
import LibraryBookCard from "./LibraryBookCard"
import Navbar from '../Navbar'
import { getLibrary } from '../data'
import SearchModal from './library-modals/SearchModal'
import { 
    compare_alphabetical,
    compare_chronological_date_last_read,
    compare_reverse_chronological_date_last_read,
    compare_rating_low_to_high, compare_rating_high_to_low
} from './compareFunctions.js'
import useModal from '../useModal'
import AddModal from './library-modals/AddModal'
import useSearchModal from '../useSearchModal'

function LibraryOverviewPage() {
    const [selectedSort, setSelectedSort] = useState("alphabetical")
    const [query, setQuery] = useState("")
    const [bookId, setBookId] = useState("")
    
    useEffect(()=> {
        console.log("New book ID = " + bookId)
    }, [bookId])

    const {toggleBook, isShowingBook} = useSearchModal()
    const {toggle, isShowing} = useModal()

    const bookCards = getLibrary()
        .filter(book => book.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        .sort((first, second) => {
                if (selectedSort === "alphabetical") {
                    return compare_alphabetical(first, second)
                } else if (selectedSort === "chronological_date_last_read") {
                    return compare_chronological_date_last_read(first, second)
                } else if (selectedSort === "reverse_chronological_date_last_read") {
                    return compare_reverse_chronological_date_last_read(first, second)
                } else if (selectedSort === "rating_low_to_high") {
                    return compare_rating_low_to_high(first, second)
                } else if (selectedSort === "rating_high_to_low") {
                    return compare_rating_high_to_low(first, second)
                } else {
                    return null
                }
            }
        )
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
            <h1 className='welcome'>Welcome to Our Library</h1>

            <div className="horizontal-menu">
                <div style={{marginLeft: 40}}>
                    <label htmlFor="search" style={{fontWeight:600}}>Search</label>
                    <input type="search" name="search" style={{marginLeft:10, marginRight:10}} onChange={e => setQuery(e.target.value)}/>

                    <select value={selectedSort} onChange={event => setSelectedSort(event.target.value)}>
                        <option value="alphabetical">Alphabetical</option>
                        <option value="chronological_date_last_read">Date last read</option>
                        <option value="reverse_chronological_date_last_read">Date last read (reverse)</option>
                        <option value="rating_low_to_high">Rating (low to high)</option>            
                        <option value="rating_high_to_low">Rating (high to low)</option>
                    </select>
                </div>
                
                <button className='add-button' onClick={toggle} style={{marginRight: 50}}>Add New</button>
            </div>

            <div className="book-gallery">
                {bookCards}
            </div>

            {isShowingBook ? 
                <SearchModal 
                    isShowingBook={isShowingBook}
                    toggleBook={toggleBook}
                    hideAddNew={toggle}
                    newBookId={bookId}
                /> :
                <AddModal
                    isShowing={isShowing}
                    isShowingBook={isShowingBook}
                    setBookId={setBookId}
                    toggleBook={toggleBook}
                    hide={toggle}
                />
            }
        </div>
    )
}

export default LibraryOverviewPage
