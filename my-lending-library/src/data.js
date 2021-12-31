import library from "./mock-responses/library.json"
import userCornerResponse from "./mock-responses/user-corners.json"

export function getLibrary() {
    return library
}

export function getBook(bookId) {
    return library.filter(book => book.id === bookId)[0]
}

export function getUserCornerResponse() {
    return userCornerResponse
}
