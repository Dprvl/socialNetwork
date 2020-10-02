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
let messageData = [
  { id: 1, message: 'Hey'},
  { id: 2, message: 'Hoe'},
  { id: 3, message: 'Huy'},
  { id: 4, message: 'Daa'}
]
const Dialogs = (props) => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].name} />
        <DialogItem name="Benis" id="3" />
        <DialogItem name="Denis" id="4" />
      </div>
      <div className={css.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message="Huy" />
      </div>
    </div>
  )
}

export { Dialogs };