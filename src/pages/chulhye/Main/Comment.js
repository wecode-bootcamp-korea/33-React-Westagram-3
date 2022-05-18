import React from 'react';
import '../Main/Main.scss';

function Comment({ comment, onDelete }) {
  return (
    <li className="commentList">
      <span className="commentText id">alrbnb</span>
      <span className="commentText value">{commentArray}</span>
      <button onClick={onDelete} className="replyDel">
        x
      </button>
    </li>
  );
}
export default Comment;
