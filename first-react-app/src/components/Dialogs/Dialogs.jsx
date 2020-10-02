import React from 'react';
import css from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialogs-items">
        <div className="dialog">
          Valery
        </div>
        <div className="dialog">
          Bagina
        </div>
        <div className="dialog">
          Benis
        </div>
        <div className="dialog">
          Serezha
        </div>
        <div className="messages">
          <div className="message">Hey</div>
          <div className="message">Hoe</div>
          <div className="message">Bye</div>
        </div>
    </div>
    </div>
  )
}

export { Dialogs };