import { Link } from "react-router-dom"

function LibaryBookCard(props) {
    return (
        <Link to={`/book/${props.id}`} >
            <div className="book-card">
                <p>{props.title}</p>
                <img src={props.thumbnail} alt="Book thumbnail" />
                <p>{"⭐".repeat(props.rating)}</p>
            </div>
        </Link>
    )
}

export default LibaryBookCard
