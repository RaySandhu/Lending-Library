import library from "./mock-responses/library.json"

export function getLibrary() {
    return library
}

export function getBook(bookId) {
    return library.filter(book => book.id === bookId)[0]
}
