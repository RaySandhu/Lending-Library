function SearchItem(props) {

    const showSearchItem = () => {
        // console.log(props.bookId + " as per the API")
        props.setBookId(props.bookId)
        props.hideSearch()
        props.toggleBook()
    }

    return (
        <div className="book-card" onClick={showSearchItem}>
            <img src={props.thumbnail} alt="Search Item Thumbnail"/>
            <br />
            <br />
            <h1> {props.title} </h1>
            <br />
            <h3 style={{color:"red"}}> {props.author} </h3>
        </div>
    )
}

export default SearchItem