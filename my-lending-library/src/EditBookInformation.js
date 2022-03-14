import {useState} from "react"

function EditBookInformation({book, author, description, hide}) {

    async function updateBook() {
        let sendReq = await fetch("/api/updateBookInfo", {
            method: "POST",
            body: JSON.stringify({
                "id": book.id,
                "title": title,
                "author": updatedAuthor,
                "thumbnail": thumbnail,
                "description": updatedDescription,
                "readBy": readBy,
                "personalReview": personalReview,
                "personalRating": personalRating,
                "lastRead": lastRead
            })
        })
        console.log(sendReq)
    }

    const [title, setTitle] = useState(book.title)
    const [thumbnail, setThumbnail] = useState(book.thumbnail)
    const [updatedAuthor, setUpdatedAuthor] = useState(author)
    const [updatedDescription, setUpdatedDescription] = useState(description)
    const [readBy, setReadBy] = useState(book.readBy)
    const [personalRating, setPersonalRating] = useState(book.personal_rating)
    const [personalReview, setPersonalReview] = useState(book.personal_review)
    const [lastRead, setLastRead] = useState(book.last_read)

    return(
        <div className="edit-book-form">
            <div className="edit-book-form-item">
                <h3>Book Title:</h3> 
                <input 
                    id="Book Title"
                    defaultValue={title}
                    type="text"
                    onChange = {(event) => setTitle(event.target.value)}
                /><br/>
            </div>

            <div className="edit-book-form-item">
                <h3>Book Author(s):</h3> 
                <input 
                    id="Book Author"
                    defaultValue={updatedAuthor}
                    type="text"
                    onChange = {(event) => setUpdatedAuthor(event.target.value)}
                /><br/>
            </div>

            <div className="edit-book-form-item">
                <h3>Book Thumbnail:</h3> 
                <textarea 
                    id="Book Thumbnail"
                    defaultValue={thumbnail}
                    onChange = {(event) => setThumbnail(event.target.value)}
                /><br/>
            </div>

            <div className="edit-book-form-item">
                    <h3>Who has read this book?</h3>

                    <select id="readby" onChange={(event) =>  setReadBy(event.target.value)}>
                        <option selectedvalue="Not Read Yet"> Not Read Yet</option>
                        <option value="Ray"> Ray </option>
                        <option value="Joe"> Joe </option>
                        <option value="Both"> Both </option>
                    </select>
            </div>

            <div className="edit-book-form-item">
                <h3>When was this book last read?</h3> 
                <input 
                    type="date" 
                    id="lastreadon" 
                    defaultValue={lastRead}
                    onChange={event => {setLastRead(event.target.value)}} 
                />
            </div>

            <div className="edit-book-form-item">
                <h3>What would you rate this book?</h3>
                    <input 
                        type="number" 
                        defaultValue={personalRating}
                        id="personalrating" 
                        name="personalrating" 
                        min="0" 
                        max="5" 
                        step="0.5" 
                        width="10px"
                        onChange = {(event) => setPersonalRating(event.target.value)}
                    />
            </div>

            <div className="edit-book-form-item" style={{width:"90%"}}>
                <h3>Book Description (Generic):</h3> 
                <textarea 
                    id="Book Description (Generic)"
                    defaultValue={updatedDescription}
                    onChange = {(event) => setUpdatedDescription(event.target.value)}
                    rows= "8"
                />
            </div>

            <div className="edit-book-form-item" style={{width:"90%"}}>
                <h3> Enter your thoughts on the book here: </h3>
                <textarea 
                    id="Personal Review" 
                    defaultValue={personalReview}
                    onChange = {(event) => setPersonalReview(event.target.value)}
                    rows= "8"
                />
            </div>
            <button type="submit" onClick={() => {updateBook()}} > Update Book Information </button>
            <button onClick={hide}> Return to Book Page </button>
        </div>
    )



}

export default EditBookInformation