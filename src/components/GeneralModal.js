import React from "react";

import "../assets/styles/modal.css";

export const GeneralModal = ({
  title = "",
  content = "",
  closeButtonText = "Kapat",
  closeButtonClick = () => {},
  confirmButtonText = "Onayla",
  confirmButtonClick = () => {},
  hasConfirm = false,
}) => {
  return (
    <div className="modalContainer">
      <div className="modalContentContainer">
        <h1 className="modelTitle">{title} </h1>
        <p className="modalContentText">{content} </p>
        <div className="modalButtonsWrapper">
          <button className="cancelBtn" onClick={closeButtonClick}>
            {closeButtonText}
          </button>
          {hasConfirm === true && (
            <button className="confirmBtn" onClick={confirmButtonClick}>
              {confirmButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default GeneralModal
