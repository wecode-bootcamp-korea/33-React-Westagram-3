import React from 'react';
import '../Main/Main.scss';

const Reply = () => {
  return (
    <div className="replySection">
      <ul className="replyBox" />
      <div className="replyContainer">
        <input type="text" className="mainReply" placeholder="댓글 남기기..." />
        <button type="submit" className="replyBtn">
          게시
        </button>
      </div>
    </div>
  );
};

export default Reply;
