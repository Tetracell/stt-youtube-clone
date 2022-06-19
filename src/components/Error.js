import React from "react";
import styles from "./Error.css";
import { RiCloseLine } from "react-icons/ri";

// Tutorial on creating a modal : https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc

export const Error = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onclick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div classNAme={styles.modalHeader}>
            <h5 className={styles.heading}>Whoa, buddy!</h5>
          </div>
          <button className={styles.clostBtn} onclick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            Sorry, an unexpected error has occured
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Ok, sorry.
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
