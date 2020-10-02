import React from 'react';
import css from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={css.nav}>
      <div className={`${css.navItem} ${css.active}`}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={css.navItem}>
        <a href='/dialogs'>Messages</a>
      </div>
      <div className={css.navItem}>
        <a href='/news'>News</a>
      </div>
      <div className={css.navItem}>
        <a href='/music'>Music</a>
      </div>
      <div className={css.navItem}>
        <a href='/settings'>Settings</a>
      </div>
    </nav>
  )
}

export { NavBar };
