import React from 'react';
import { Post } from './Post/Post';
import css from './MyPosts.module.css';

let postData = [
  { id: 1, message: 'BENIS::DDDDD', likesCount: 0 },
  { id: 2, message: 'BAGINA:DDD:D', likesCount: 69 }
];

let postsElements = postData
  .map( p => <Post message={p.message} likes={p.likesCount} />);

const MyPosts = () => {
  return (
    <div className={css.postsStyle}>
      <h3>My posts</h3>
      <div>
        <textarea placeholder="кто прочитал тот здохнет"></textarea>
      </div>
      <div><button>PUBLISH</button>
      </div>
      {postsElements}
    </div>
  )
}

export { MyPosts };