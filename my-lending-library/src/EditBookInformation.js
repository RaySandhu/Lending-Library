import {useState} from "react"

function EditBookInformation({book, author, description, hide, isShowing}) {

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
        <div>
            <h3>Book Title:</h3> <br/>
            <textarea 
                id="Book Title"
                defaultValue={title}
                onChange = {(event) => setTitle(event.target.value)}
            /><br/>
            <h3>Book Thumbnail:</h3> <br/>
            <textarea 
                id="Book Thumbnail"
                defaultValue={thumbnail}
                onChange = {(event) => setThumbnail(event.target.value)}
            /><br/>
            <h3>Book Author(s):</h3> <br/>
            <textarea 
                id="Book Author"
                defaultValue={updatedAuthor}
                onChange = {(event) => setUpdatedAuthor(event.target.value)}
            /><br/>
            <h3>Book Description (Generic):</h3> <br/>
            <textarea 
                id="Book Description (Generic)"
                defaultValue={updatedDescription}
                onChange = {(event) => setUpdatedDescription(event.target.value)}
            /><br/>
                    
            <form className="form-style"> 
                <label htmlFor="readby">
                    Who has read this book?
                    <br/>
                    <select id="readby" onChange={(event) =>  setReadBy(event.target.value)}>
                        <option selectedvalue="Not Read Yet"> Not Read Yet</option>
                        <option value="Ray"> Ray </option>
                        <option value="Joe"> Joe </option>
                        <option value="Both"> Both </option>
                    </select>
                </label> 
                <br/>

                <label htmlFor="lastreadon">
                    When was this book last read? 
                    <br/>
                    <input 
                        type="date" 
                        id="lastreadon" 
                        defaultValue={lastRead}
                        onChange={event => {setLastRead(event.target.value)}} 
                    />
                </label> 
                <br/>

                <label htmlFor="personalrating">
                    What would you rate this book? <br/>                    
                    <input 
                        type="number" 
                        defaultValue={personalRating}
                        id="personalrating" 
                        name="personalrating" 
                        min="0" 
                        max="5" 
                        step="0.5" 
                        onChange = {(event) => setPersonalRating(event.target.value)}
                    />
                </label>

                <br/>

            </form>
            <br/>
            <label htmlFor="thoughts"> Enter your thoughts on the book here: </label>
            <textarea 
                id="Personal Review" 
                defaultValue={personalReview}
                onChange = {(event) => setPersonalReview(event.target.value)}
            />
            <br/>
            <button type="submit" onClick={() => {updateBook()}} > Update Book Information </button>
            <button onClick={hide}> Return to Book Page </button>
        </div>
    )



}

export default EditBookInformation