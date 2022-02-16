import library from "./mock-responses/library.json"

export function getLibrary() {
    return library
}

export function getBook(bookId) {
    return library.filter(book => book.id === bookId)[0]
}

export async function getUserCornerResponse(user) {
    let retrieve = await fetch("/api/readingCornerRetrieve", {
        method: "POST",
        body: JSON.stringify({
                    user: user
                })
    })

    let cornerData = await retrieve.json()
    return cornerData
}
