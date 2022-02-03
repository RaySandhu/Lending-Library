import React from "react"
import ReactDOM from "react-dom"
import SearchResult from "./SearchResult"

const SearchModal = ({isShowingBook, newBookId, toggleBook}) => isShowingBook ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay"/>
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="search-modal">
                <div className="modal-header">
                    <h1>Please Enter the Name of the New Book:</h1>
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggleBook}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="form">
                    <SearchResult
                        newBookId={newBookId}
                        hide={toggleBook}
                    />
                </div>
            </div>
        </div>
    </React.Fragment>,
    document.body
) : null

export default SearchModal