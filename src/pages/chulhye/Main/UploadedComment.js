import React from 'react';
import '../Main/Main.scss';

const UploadedComment = ({ id, userName, contents, onRemove }) => {
  return (
    <li className="commentList">
      <span className="commentText id">{userName}</span>
      <span className="commentText value">{contents}</span>
      <button onClick={() => onRemove(id)} className="replyDel">
        x
      </button>
    </li>
  );
};

export default UploadedComment;
