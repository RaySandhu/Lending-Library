import { useState } from "react"


function BookSearch({setResult}) {

    function handleNewQuery(query) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle+"${query}"&key=${process.env.REACT_APP_SECRET_API_KEY}&maxResults=3`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if(res) {
                    setResult(res.items)
                } else {
                    console.log("else working")
                    setResult([{
                        volumeInfo: {
                            industryIdentifiers: [
                                {identifier: 1}
                            ],
                            authors: "Your mom",
                            title: "No Book Found",
                            imageLinks: {
                                thumbnail: "http://i.imgur.com/J5LVHEL.jpg"
                            }
                        }
                    }])
                }
            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <input type="text" defaultValue="" onChange={e => handleNewQuery(e.target.value)}/>
            {/* <button value ="Search" onClick={returnResult} /> */}
        </div>     
    )
}

export default BookSearch
