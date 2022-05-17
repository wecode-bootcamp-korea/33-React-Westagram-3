import React, { useState, useEffect } from 'react';

import Comment from '../Comment/Comment';

const Feed = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  console.log(commentList);

  const handleSaveComment = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setCommentList([
      ...commentList,
      { id: Date.now(), name: 'nueahooy', text: comment },
    ]);
    setComment('');
  };

  useEffect(() => {
    fetch('/data/haeunCommentData.json')
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return (
    <article>
      <div className="feedHeader">
        <div className="user">
          <img
            className="userImg"
            src="images/haeun/main-img/user1.jpg"
            alt=""
          />
          <span className="userId">nueahooy</span>
        </div>
      </div>
      <div className="feedImg" />
      <div className="feedBottom">
        <div className="iconBox">
          <div className="iconLeft">
            <button className="heartImg">
              <img src="images/haeun/main-img/heart.png" alt="" />
            </button>
            <button className="commentImg">
              <img src="images/haeun/main-img/comment.png" alt="" />
            </button>
            <button className="shareImg">
              <img src="images/haeun/main-img/share.png" alt="" />
            </button>
          </div>
          <div className="iconRight">
            <button className="shaveImg">
              <img src="images/haeun/main-img/shave.png" alt="" />
            </button>
          </div>
        </div>
        <div className="likes">
          <img src="images/haeun/main-img/user2.jpg" alt="" />
          <span>
            <strong>hyunsunhye</strong>님<strong> 외 10명</strong>이 좋아합니다
          </span>
        </div>
        <div className="feedText">
          <strong>nueahooy</strong>
          <span>🍫</span>
        </div>
        <div className="commentBox">
          <p className="commentTime">42분 전</p>
          <ul className="commentList">
            {commentList.map(comment => {
              return <Comment key={comment.id} comment={comment} />;
            })}
          </ul>
        </div>
      </div>
      <form className="commentInput">
        <input
          type="text"
          placeholder="댓글 달기..."
          value={comment}
          onChange={e => handleSaveComment(e)}
        />
        <button className="commentBtn" onClick={e => handleSubmit(e)}>
          게시
        </button>
      </form>
    </article>
  );
};

export default Feed;
