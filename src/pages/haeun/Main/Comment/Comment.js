import React from 'react';

const Comment = ({ comment }) => {
  return (
    <li>
      <strong>{comment.id}</strong>
      <div className="commentText">
        <span>{comment.text}</span>
        <button>ⅹ</button>
      </div>
    </li>
  );
};

export default Comment;
