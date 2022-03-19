import React from "react";
import './../css/index.css';

export default function AlertModals({ displayState, closeState, boldAlert, message, image }) {
  return (
    <div className={displayState}>
      <div className="alert-modal-container">
        <div className="alert-modal-content">
          <div className="close-alert-container" onClick={closeState}>
           X
         </div>
          <div className="modal-message">
            <div>
              <img src={image}/>
            </div>
            <span className="boldAlert">{boldAlert}</span>
             {message}
          </div>
        </div>
      </div>
    </div>
  );
}
