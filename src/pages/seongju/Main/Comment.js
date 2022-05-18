import './Comment.scss';
import React from 'react';

function Comment({ feedComment, setComment, userComment, id }) {
  return (
    <div className="inputComment">
      <b>wkddn1359</b> <span>{userComment}</span>
      <button className="commentLike" style={{ backgroundColor: 'red' }}>
        🤍
      </button>
      <button
        onClick={() => {
          const copy = [...feedComment];
          copy.splice(id, 1);
          setComment(copy);
        }}
        className="commentDelete"
      >
        ❌
      </button>
    </div>
  );
}

export default Comment;
