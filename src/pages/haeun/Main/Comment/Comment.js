import React from 'react';

const Comment = ({ comment }) => {
  return (
    <li>
      <strong>{comment.name}</strong>
      <div className="commentText">
        <span>{comment.text}</span>
        <button>ⅹ</button>
      </div>
    </li>
  );
};

export default Comment;
