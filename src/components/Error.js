import React from "react";
import styles from "./Error.css";
import { RiCloseLine } from "react-icons/ri";

// Tutorial on creating a modal : https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc

export const Error = ({ ...props }) => {
  if (!props.show) {
    return null
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Error reason</h4>
        </div>
        <div className="modal-body">
          This is the content of the error
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  )
};
