import React from 'react';
import './Feeds.scss';
import Comment from './Comment';
import { useState, useEffect } from 'react';

function Feeds({ profileSrc, prdfileId, feedScript }) {
  let [input, setInput] = useState('');
  let [comment, setComment] = useState([]);

  const pushComment = () => {
    const copy = [...comment];
    copy.push(input);
    setComment(copy);
    setInput('');
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => setComment(data));
  }, []);

  return (
    <div className="feeds">
      <article>
        <div className="feedsTop">
          <img
            src={profileSrc}
            width="53"
            height="53"
            className="feedsTopUserIcon"
            alt="내 사진"
          />
          <span className="feedsTopUserId">
            <b>wecode_bootcamp</b>
          </span>
          <span className="feedsTopUserName">{prdfileId}</span>
          <button id="feedsTopUpdateButton" className="fa-solid fa-ellipsis" />
        </div>
        <img
          src={profileSrc}
          width="100%"
          height="620"
          className="feedsUserImage"
          alt="내 사진"
        />
        <div className="feedsMiddle">
          <div className="feedsMiddleIcon">
            <a href="#Top" className="feedsMiddleIconHeart">
              <img
                src="/images/seongju/main-img/heart.png"
                width="35"
                height="35"
                alt="피드 하트 아이콘"
              />
            </a>
            <a href="#Top" className="feedsMiddleIconComment">
              <img
                src="/images/seongju/main-img/comment.png"
                width="35"
                height="35"
                alt="피드 댓글 아이콘"
              />
            </a>
            <a href="#Top" className="feedsMiddleIconShare">
              <img
                src="/images/seongju/main-img/share.png"
                width="35"
                height="35"
                alt="피드 공유 아이콘"
              />
            </a>
          </div>
          <div>
            <a href="#Top" className="feedsMiddleIconSave">
              <img
                src="/images/seongju/main-img/shave.png"
                width="35"
                height="35"
                alt="피드 저장 아이콘"
              />
            </a>
          </div>
        </div>
        <div className="feedsLikeWrapper">
          <img
            src="/images/seongju/main-img/friends_1.webp"
            width="50"
            height="50"
            className="friendsOne"
            alt="피드 친구 사진"
          />
          <div className="feedsHowManyLikes">
            <b>AhnSeoung_Ju</b>님 {feedScript}
            {comment.map((commentArr, i) => {
              return (
                <Comment
                  feedComment={comment}
                  userComment={commentArr}
                  setComment={setComment}
                  key={i}
                  id={i}
                />
              );
            })}
          </div>
          <section className="feedsCommentWrapper">
            <input
              onChange={e => {
                setInput(e.target.value);
              }}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  if (e.target.value.length === 0) {
                    alert('댓글을 입력하세요.');
                  } else {
                    pushComment();
                  }
                }
              }}
              value={input}
              type="text"
              className="feedsCommentInput"
              placeholder="&#128512; 댓글 달기..."
            />
            <button
              onClick={() => {
                pushComment();
              }}
              className="feedsCommentButton"
            >
              게시
            </button>
          </section>
        </div>
      </article>
    </div>
  );
}
export default Feeds;
