import { useState } from "react"

function APIRender() {
    const [results, setResults] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState("")

    function searching(event) {
      setSearchValue(event.target.value)
    }

    function lookUp() {
      
      fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle+"Deep Work"&key=AIzaSyAzjMlGdwgvdcb-AalwqmZBJ4x8FfM_B_8&maxResults=20`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setResults(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
            }
          )
      }
    
      return {
        results,
        searchValue,
        searching,
        lookUp,
        isLoaded,
        error
      }

}

export default APIRender