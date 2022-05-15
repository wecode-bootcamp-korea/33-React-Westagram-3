import React from 'react';
import '../Main/Main.scss';

function Comment(props) {
  let commentArray = props.commentArray;
  return (
    <ul className="replyBox">
      {commentArray.map((value, id) => (
        <li key={id} className="commentList">
          <span className="commentText">alrbnb</span>
          <span className="commentText">{value}</span>
          <span className="replyDel">X</span>
        </li>
      ))}
    </ul>
  );
}

export default Comment;
