import React from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import css from './Dialogs.module.css';

const Dialogs = (props) => {

  let dialogsElements = props.dialogs
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  
  let messageElements = props.messages
    .map( message => <Message message={message.message} />);

  return (
    <div className={css.dialogs}>
      <div className={css.dialogItems}>
        {dialogsElements}
      </div>
      <div className={css.messages}>
        {messageElements}
      </div>
    </div>
  )
}

export { Dialogs };