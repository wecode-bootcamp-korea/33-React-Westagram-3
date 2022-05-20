import React from 'react';
import '../Main/Main.scss';
import { useState, useEffect, useRef } from 'react';
import UploadedComment from './UploadedComment';

const CommentList = () => {
  const commentId = useRef(3);
  const [commentList, setCommentList] = useState([]); // 먼저 업로드 되어 있는 댓글과 추가된 댓글 모음 .
  const [comment, setComment] = useState(''); // 댓글

  useEffect(() => {
    fetch('http://localhost:3000/data/commentListData.json')
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  const onChange = e => setComment(e.target.value);

  const onInsert = text => {
    const commentValue = {
      id: commentId.current,
      userName: 'alrbnb',
      contents: comment,
    };
    if (text.length !== 0) {
      setCommentList([...commentList, commentValue]);
      commentId.current += 1;
    }
  };

  const onSubmit = e => {
    onInsert(comment);
    e.preventDefault();
    setComment('');
  };

  const onRemove = commentId => {
    const commentDel = commentList.filter(
      eachComment => eachComment.id !== commentId
    );
    setCommentList(commentDel);
  };

  return (
    <div className="replySection">
      {/* <ul className="replyBox" /> */}
      <ul className="replyBox">
        {commentList.map(info => {
          return (
            <UploadedComment
              key={info.id}
              id={info.id}
              userName={info.userName}
              contents={info.contents}
              onRemove={onRemove}
            />
          );
        })}
      </ul>
      <div className="replyContainer">
        {/* form 태그로 input 과 button을 감싸면 엔터나 버튼 클릭 시, submit으로
        인식한다. */}
        <form className="commentWrap" onSubmit={onSubmit}>
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
