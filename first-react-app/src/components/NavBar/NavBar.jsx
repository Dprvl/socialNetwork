import React from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
        <div className={`${classes.navItem} ${classes.active}`}>
          <a>Profile</a>  
        </div>
        <div className={classes.navItem}>
        <a>Education</a>
        </div>
        <div className={classes.navItem}>
          <a>Work experience</a>
        </div>
        <div className={classes.navItem}>
          <a>About me</a>
        </div>
    </nav>
    )
}

export {NavBar};