import { Link } from "react-router-dom"

//#TODO - CSS styling
    //max lenght of title name to keep bookCard size consistent
    //max dimensions of thumbnail for same reason
    //contrast for design efforts
        //colour of bookCard
        //title fonts
        //etc.

function LibaryBookCard(props) {
    let showingTitle = ""
    if(props.title.length>19) {
        showingTitle = props.title.slice(0,15) + "..."
    } else showingTitle = props.title

    return (
        <Link style = {{textDecoration: "none"}}to={`/book/${props.id}`} >
            <div className="book-card">
                <h1 className="book-card-item">{showingTitle}</h1>
                <img src={props.thumbnail} className="book-card-item" style={{width:"80%", marginLeft:"10%"}} alt="Book thumbnail" />
                <p className="book-card-item">{"⭐".repeat(props.rating)}</p>
            </div>
        </Link>
    )
}

export default LibaryBookCard
