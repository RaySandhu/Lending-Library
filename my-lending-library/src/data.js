import library from "./mock-responses/library.json"

export function getLibrary() {
    return library
}

export function getBook(bookId) {
    return library.filter(book => book.id === bookId)[0]
}

export async function getUserCornerResponse(user) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    let retrieve = await fetch("/api/retrievalFunctionTemplate", {
        method: "POST",
        body: JSON.stringify({
                    user: user
                })
    })

    let cornerData = await retrieve.json()
    return cornerData
}
