import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={css.nav}>
      <div className={`${css.navItem} ${css.active}`}>
        <NavLink to='/profile' activeClassName={css.activeLink}>Profile</NavLink>
      </div>
      <div className={css.navItem}>
        <NavLink to='/dialogs' activeClassName={css.activeLink}>Messages</NavLink>
      </div>
      <div className={css.navItem}>
        <NavLink to='/news' activeClassName={css.activeLink}>News</NavLink>
      </div>
      <div className={css.navItem}>
        <NavLink to='/music' activeClassName={css.activeLink}>Music</NavLink>
      </div>
      <div className={css.navItem}>
        <NavLink to='/settings' activeClassName={css.activeLink}>Settings</NavLink>
      </div>
    </nav>
  )
}

export { NavBar };
