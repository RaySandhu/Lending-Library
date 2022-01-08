function BookSearch() {

    function handleNewQuery(query) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle+"${query}"&key=${process.env.REACT_APP_SECRET_API_KEY}&maxResults=20`)
            .then(res => res.json())
            .then(res => console.log(res.items.map(item => item.volumeInfo.title)))
            .catch(err => console.log(err))
    }

    return (
        <input type="text" defaultValue="" onChange={e => handleNewQuery(e.target.value)}/>
    )
}

export default BookSearch
