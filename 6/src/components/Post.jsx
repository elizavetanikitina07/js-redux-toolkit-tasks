import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment.jsx';

const Post = ({ post }) => {
  const author = useSelector((state) => {
    const authorId = typeof post.author === 'object' && post.author !== null
      ? post.author.id
      : post.author;
    return state.usersReducer.entities[authorId];
  });

  if (!author) {
    return null;
  }

  return (
    <div className="card">
      <div className="card-header">
        {`${post.body} - ${author.name}`}
      </div>
      <div className="card-body">
        {post.comments.map((commentId) => {
          const id = typeof commentId === 'object' && commentId !== null
            ? commentId.id
            : commentId;
          return <Comment key={id} commentId={id} />;
        })}
      </div>
    </div>
  );
};

export default Post;