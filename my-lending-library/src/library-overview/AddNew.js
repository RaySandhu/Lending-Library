import {  useState } from "react"
import BookSearch from "../BookSearch"
import SearchItem from "./add-modal/SearchItem"

function AddNew(props) {
    const [result, setResult] = useState([])
    const [reveal, setReveal] = useState(false)

    const revealer = () => {
         setReveal(!reveal)
    }


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
        />
    })



    return(
        <div>
            <BookSearch className="book-search" setResult={setResult}/> <br/><br/>
            <button className="add-button" type="submit" onClick={revealer}> Search </button> <br/><br/>
            {reveal && result.length>0
                ? <div className="book-gallery"> {searchCards} </div>
                : <h1> Nothing to show </h1>
            }
        </div>
    )
}

export default AddNew