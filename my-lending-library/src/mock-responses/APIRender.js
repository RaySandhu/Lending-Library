import { useEffect, useState } from "react"

function APIRender() {
    const [library, setLibrary] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setLibrary(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    

}

export default APIRender