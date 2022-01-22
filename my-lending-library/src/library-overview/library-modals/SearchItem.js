

function SearchItem(props) {
    return (
        <div className="book-card" onClick={ () => {console.log("clicked")} 
        // props.revealProductInfo
        }>
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