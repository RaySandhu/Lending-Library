import "./add-modal.css"
import React from "react"
import ReactDOM from "react-dom"
import AddNew from "../AddNew"

const AddModal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay"/>
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <h1>Please Enter the Name of the New Book:</h1>
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="form">
                    <AddNew  
                        hide={hide}
                    />
                </div>
            </div>
        </div>
    </React.Fragment>,
    document.body
) : null

export default AddModal
