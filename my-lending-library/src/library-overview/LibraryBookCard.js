function LibaryBookCard(props) {
    return (
        <div className="book-card">
            <p>{props.title}</p>
            <img src={props.thumbnail} alt="Book thumbnail" />
            <p>{props.rating}</p>
        </div>
    )
}

export default LibaryBookCard
