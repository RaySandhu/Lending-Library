import BookSearch from "../BookSearch"
import SearchItem from "./add-modal/SearchItem"

function AddNew(props) {
    // const searchCards = res.items.map(item => {
    //     <SearchItem 
    //         key = {item.volumeInfo.industryIdentifiers[0].identifier}
    //         thumbnail = {item.volumeInfo.imageLinks.thumbnail}
    //         title = {item.volumeInfo.title}
    //         author = {item.volumeInfo.authors[0]}
    //     />
    // })

    return(
        <div>
            <BookSearch className="book-search"/> <br/><br/>
            <button className="add-button" type="submit" onClick={props.hide}> Search </button> <br/><br/>
            {/* {searchCards} */}
        </div>
    )
}

export default AddNew