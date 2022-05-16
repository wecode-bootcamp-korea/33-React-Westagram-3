import React from 'react';
import '../Main/Main.scss';

function Comment({ commentArray }) {
  let commentList = commentArray;
  return (
    <ul className="replyBox">
      {commentList.map((value, id) => (
        <li key={id} className="commentList">
          <span className="commentText id">alrbnb</span>
          <span className="commentText value">{value}</span>
          <button className="replyDel">x</button>
        </li>
      ))}
    </ul>
  );
}

export default Comment;
