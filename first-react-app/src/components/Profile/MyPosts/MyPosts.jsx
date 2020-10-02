import React from 'react';
import { Post } from './Post/Post';
import css from './MyPosts.module.css';

let postData = [
  { id: 1, message: 'BENIS::DDDDD', likesCount: 0 },
  { id: 2, message: 'BAGINA:DDD:D', likesCount: 69 }
];

const MyPosts = () => {
  return (
    <div className={css.postsStyle}>
      <h3>My posts</h3>
      <div>
        <textarea placeholder="кто прочитал тот здохнет"></textarea>
      </div>
      <div><button>PUBLISH</button>
      </div>
      <Post message={postData[0].message} likes={postData[0].likesCount} />
      <Post message={postData[1].message} likes={postData[1].likesCount} />
    </div>
  )
}

export { MyPosts };