import React from 'react';
import { Post } from './Post/Post'
import css from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={css.postsStyle}>
      My posts
      <div>
      <textarea placeholder="кто прочитал тот здохнет"></textarea>
      <button>PUBLISH</button>
      </div>
      <Post message="BENIS::DDDDD"/>
      <Post message="BAGINA:DDD:D"/>
    </div>
  )
}

export { MyPosts };