import { useEffect, useState } from "react"
import BookSearch from "../BookSearch"
import SearchItem from "./add-modal/SearchItem"

function AddNew(props) {
    const [result, setResult] = useState([])
    const [reveal, setReveal] = useState(false)

    useEffect(() => {
        result.map(item => {
            console.log(item.volumeInfo.industryIdentifiers[0].identifier)
            
            if(item.volumeInfo.hasOwnProperty("authors")) {
                console.log(item.volumeInfo.authors)
            } else console.log("Authors section does not exist")
            console.log("--------------------")
        })
    })

    const revealer = () => {
         setReveal(!reveal)
    }


    const searchCards = result.map(item => {
        return <SearchItem 
            key = {item.volumeInfo.industryIdentifiers[0].identifier}
            thumbnail = {
                item.volumeInfo.hasOwnProperty("imageLinks") ?
                item.volumeInfo.imageLinks.thumbnail :
                "http://i.imgur.com/J5LVHEL.jpg"
            }
            title = {item.volumeInfo.title}
            author = {
                item.volumeInfo.hasOwnProperty("authors") ?
                item.volumeInfo.authors :
                <h3 style={{color:"red"}}> No author available </h3>}
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