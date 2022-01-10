
function SearchItem(props) {

    return(
        <div className="book-card">
            <img src="props.volumeInfo.imageLink.thumbnail" />
            <p>
                {props.title}
                {props.authors[0]}
            </p>
        </div>
    )
}

export default SearchItem