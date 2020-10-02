import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
  return (
      <div className={css.postItem}>
        {props.message}
      </div>
  )
}

export { Post };