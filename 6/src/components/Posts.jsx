import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post.jsx';

const Posts = () => {
  const ids = useSelector((state) => state.postsReducer.ids);
  const entities = useSelector((state) => state.postsReducer.entities);

  const posts = ids.map((id) => entities[id]);

  return (
    <div className="mt-3">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;