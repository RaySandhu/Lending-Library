function SearchItem(props) {

    const showSearchItem = () => {
        props.setBookId(props.bookId)
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