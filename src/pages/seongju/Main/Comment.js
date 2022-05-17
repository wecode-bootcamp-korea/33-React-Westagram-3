import './Comment.scss';
import React from 'react';

function Comment({ commentData, comment, setComment }) {
  return (
    <div className="inputComment">
      <b>{commentData.name}</b> <span>{commentData.comment}</span>
      <span className="countLike">👍</span>
      <button className="commentLike">👍</button>
      <button
        className="commentDelete"
        onClick={() => {
          let copy = [...comment];
          copy.pop();
          setComment(copy);
        }}
      >
        ❌
      </button>
    </div>
  );
}

export default Comment;
