import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return (
    <header className={css.header}>
      <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" />
    </header>
    )
}

export {Header};