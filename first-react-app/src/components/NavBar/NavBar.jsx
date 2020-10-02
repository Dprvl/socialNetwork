import React from 'react';
import css from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={css.nav}>
      <div className={`${css.navItem} ${css.active}`}>
        <a>Profile</a>
      </div>
      <div className={css.navItem}>
        <a>Messages</a>
      </div>
      <div className={css.navItem}>
        <a>News</a>
      </div>
      <div className={css.navItem}>
        <a>Music</a>
      </div>
      <div className={css.navItem}>
        <a>Settings</a>
      </div>
    </nav>
  )
}

export { NavBar };
