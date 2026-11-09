import React from 'react';
import { useSelector } from 'react-redux';

const Comment = ({ commentId }) => {
  const comment = useSelector((state) =>
    state.commentsReducer.entities[commentId]);

  const author = useSelector((state) => {
    const authorId = typeof comment?.author === 'object' && comment.author !== null
      ? comment.author.id
      : comment?.author;
    return state.usersReducer.entities[authorId];
  });

  if (!author || !comment) {
    return null;
  }

  return (
    <>
      <h5 className="card-title">{ author.name }</h5>
      <p className="card-text">{ comment.text }</p>
    </>
  );
};

export default Comment;