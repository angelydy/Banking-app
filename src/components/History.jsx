import React from 'react' 
import {v4 as uuidv4} from 'uuid';
import './../css/index.css';

export default function History({ displayState, closeState, historyMessage }) {
  return (
    <div className={displayState}>
      <div className="alert-modal-container">
        <div className="alert-modal-content">
          <div className="close-alert-container" onClick={()=> closeState()}>
           X
          </div>
          <div className="modal-message">
            {historyMessage.map((user) =>{
              return (
                <div key={uuidv4()}>
                  {user}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
