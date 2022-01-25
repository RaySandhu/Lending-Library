import {   useState } from "react"
import BookSearch from "../../BookSearch"
import SearchItem from "./SearchItem"

function AddNew(props) {
    const [result, setResult] = useState([])
    const [numResults, setNumResults] = useState(5)

    const searchCards = result.map(item => {
        return <SearchItem 
            key = {item.id}
            bookId = {item.id}
            setBookId = {props.setBookId}
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
            hideSearch={props.hide}
            isShowingBook={props.isShowingBook}
            toggleBook={props.toggleBook}
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
        </div>      
    )
}

export default AddNew