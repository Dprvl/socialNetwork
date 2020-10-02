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

const Dialogs = (props) => {
  return (
    <div className={css.dialogs}>
      <div className={css.dialogItems}>
        <DialogItem name="Valera" id="1" />
        <DialogItem name="Bagina" id="2" />
        <DialogItem name="Benis" id="3" />
        <DialogItem name="Denis" id="4" />
      </div>
      <div className={css.messages}>
        <Message message="Hey" />
        <Message message="Hoe" />
        <Message message="Huy" />
      </div>
    </div>
  )
}

export { Dialogs };