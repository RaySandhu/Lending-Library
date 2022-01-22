import { useState } from "react"

const useSearchModal = () => {
    const[isShowingBook, setIsShowingBook] = useState(false)

    function toggleBook() {
        setIsShowingBook(!isShowingBook)
    }

    return {
        isShowingBook,
        toggleBook
    }
}

export default useSearchModal
