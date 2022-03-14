import "./about-page/corner-modal/modal.css"
import React from "react"
import ReactDOM from "react-dom"
import EditBookInformation from "./EditBookInformation"

const EditBookModal = (props) => props.isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <h1>Please Update Book Information</h1>
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={props.hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div>
                    <EditBookInformation
                            key = {props.bookId}
                            isShowing = {props.isShowing}
                            book = {props.book}
                            author = {props.author}
                            description = {props.description}
                            hide = {props.hide}
                    />
                </div>
            </div>
        </div>
    </React.Fragment>,
    document.body
) : null

export default EditBookModal
