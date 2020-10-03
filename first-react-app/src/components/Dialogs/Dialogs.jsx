import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={css.dialog + ' ' + css.active}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
};

const Message = (props) => {
  return (
    <div className={css.messages}>
      <div className={css.message}>{props.message}</div>
    </div>
  )
};

let dialogsData = [
  { id: 1, name: 'Valera'},
  { id: 2, name: 'Bagina'},
  { id: 3, name: 'Benis'},
  { id: 4, name: 'Denis'}
]

let dialogsElements = dialogsData
  .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

let messageData = [
  { id: 1, message: 'Hey'},
  { id: 2, message: 'Hoe'},
  { id: 3, message: 'Huy'},
  { id: 4, message: 'Daa'}
]

let messageElements = messageData
  .map( message => <Message message={message.message} />);

const Dialogs = (props) => {
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