import { useState } from "react"

function BookSearch({numberOfResults, setResult}) {

    const [newQuery, setNewQuery] = useState("")

    function handleNewQuery(query) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q="${query}"&key=${process.env.REACT_APP_SECRET_API_KEY}&maxResults=${numberOfResults}`)
            .then(res => res.json())
            .then(res => {
                console.log(
                    res,
                    res.items[0].volumeInfo.authors,
                    res.items[0].volumeInfo.imageLinks.thumbnail,
                    res.items[0].volumeInfo.title
                    )
                if(res.totalItems !== 0) {
                    setResult(res.items)
                } else {
                    setResult([{
                        id: 1,
                        volumeInfo: {
                            authors: "Your mom",
                            title: "No Book Found",
                            imageLinks: {
                                thumbnail: "http://i.imgur.com/J5LVHEL.jpg"
                            }
                        }
                    }])
                }
            })
            .catch(err => {
                console.log(err)
                setResult([])
            })
    }



    return (
        <div>
            <input type="text" defaultValue="" onChange={e=>{setNewQuery(e.target.value)}} /><br /> <br/>
            <button className="add-button" type="submit" onClick={() => {handleNewQuery(newQuery)}}> Search </button>
        </div>     
    )
}

export default BookSearch
