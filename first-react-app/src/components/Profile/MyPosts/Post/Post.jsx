import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
  return (
    <div className={css.postItem}>
      <span><img src="https://astv.ru/content/Avatars/05/93/0593ef7c-4a91-4ee4-8c74-1762c0a0051e_2.jpg" /></span> 
      <span>{props.message}</span>
  <span>Likes: {props.likes}</span>
    </div>
  )
}

export { Post };