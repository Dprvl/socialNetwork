import React from 'react';
import { Post } from './Post/Post';
import css from './MyPosts.module.css';

const MyPosts = (props) => {

  let postsElements = props.posts
    .map(p => <Post message={p.message} likes={p.likesCount} />);

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