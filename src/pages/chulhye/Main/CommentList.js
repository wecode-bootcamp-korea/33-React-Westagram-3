import React from 'react';
import '../Main/Main.scss';
import { useState } from 'react';
import Comment from '/Users/sozzln/Desktop/33-React-Westagram-3/src/pages/chulhye/Main/Comment.js';

const CommentList = () => {
  const [comment, setComment] = useState(''); // 댓글
  const onChange = e => setComment(e.target.value);

  const [commentArray, setCommentArray] = useState([]); //댓글 목록
  const onSubmit = e => {
    e.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(commentValueList => [comment, ...commentValueList]);
    setComment('');
  };

  return (
    <div className="replySection">
      {/* <ul className="replyBox" /> */}
      <Comment commentArray={commentArray} />
      <div className="replyContainer" onSubmit={onSubmit}>
        {/* form 태그로 input 과 button을 감싸면 엔터나 버튼 클릭 시, submit으로
        인식한다. */}
        <form className="commentWrap">
          <input
            type="text"
            className="mainReply"
            placeholder="댓글 남기기..."
            value={comment}
            onChange={onChange}
          />
          <button type="submit" className="replyBtn">
            게시
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentList;
