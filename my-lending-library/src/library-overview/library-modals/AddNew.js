import {   useState } from "react"
import BookSearch from "../../BookSearch"
import SearchItem from "./SearchItem"
import SearchModal from "./SearchModal"
import useSearchModal from "../../useSearchModal"

function AddNew() {
    const [result, setResult] = useState([])
    const [numResults, setNumResults] = useState(5)
    const {toggleBook, isShowingBook} = useSearchModal()

    const searchCards = result.map(item => {
        return <SearchItem 
            key = {item.id}
            thumbnail = {
                item.volumeInfo.hasOwnProperty("imageLinks") ?
                item.volumeInfo.imageLinks.thumbnail :
                "http://i.imgur.com/J5LVHEL.jpg"
            }
            title = {item.volumeInfo.title}
            author = {
                item.volumeInfo.hasOwnProperty("authors") ?
                item.volumeInfo.authors :
                "No author available"
            }
            revealProductInfo = {toggleBook}
        />
    })


    return(
        <div>
            <BookSearch className="book-search" setResult={setResult} numberOfResults={numResults}/> 
            <select onChange={e => {setNumResults(e.target.value)}}>
                <option defaultValue="5">5 </option>
                <option value="10">10</option>
                <option value="20">25</option>
                {/* <option value="50">50 </option>
                <option value="100"> 100 </option> */}
            </select>
            
            <br/><br/>
            {result.length>0
                ? <div className="book-gallery"> {searchCards} </div>
                : <h1> Nothing to show </h1>
            }
            <SearchModal 
                isShowingBook ={isShowingBook}
                toggle={toggleBook}
            />
        </div>      
    )
}

export default AddNew