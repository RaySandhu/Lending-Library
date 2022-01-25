
function SearchResult(props) {


    return(
        <div>
            Search result form goes here<br/><br/>
            The Book ID is: <br/>
            {props.newBookId}
            <br/>
            <button onClick={props.hide}> Return to Library </button>
        </div>
    )
}

export default SearchResult