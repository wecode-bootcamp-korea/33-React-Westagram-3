import React, { Fragment } from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/nav';
import Comment from './Comment';
import { useState } from 'react';

function Main() {
  let [input, setInput] = useState('');
  let [comment, setComment] = useState([]);
  let [like, setLike] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const pushCommnet = () => {
    let copy = [...comment];
    copy.push(input);
    setComment(copy);
    setInput('');
  };

  return (
    <Fragment>
      <Nav />
      <main>
        <div className="feeds">
          <article>
            <div className="feedsTop">
              <img
                src="/images/seongju/main-img/myphoto.webp"
                width="53"
                height="53"
                className="feedsTopUserIcon"
                alt="내 사진"
              />
              <span className="feedsTopUserId">
                <b>wecode_bootcamp</b>
              </span>
              <span className="feedsTopUserName">WeCode - 위코드</span>
              <button
                id="feedsTopUpdateButton"
                className="fa-solid fa-ellipsis"
              />
            </div>
            <img
              src="/images/seongju/main-img/myphoto.webp"
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
              <p className="feedsHowManyLikes">
                <b>AhnSeoung_Ju</b>님 <b>외 4명</b>이 좋아합니다.
                {comment.map(function (a, i) {
                  return (
                    <Comment
                      comment={comment}
                      like={like}
                      setLike={setLike}
                      setComment={setComment}
                      i={i}
                      key={i}
                    />
                  );
                })}
              </p>
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
                        pushCommnet();
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
                    pushCommnet();
                  }}
                  className="feedsCommentButton"
                >
                  게시
                </button>
              </section>{' '}
            </div>
          </article>
        </div>
        <div className="mainSide">
          <div className="mainSideTop">
            <img
              src="/images/seongju/main-img/myphoto.webp"
              width="57"
              height="57"
              className="sideTopUserIcon"
              alt="사이드바 내 사진"
            />
            <span className="sideTopUserId">
              <b>wecode_bootcamp</b>
            </span>
            <span className="sideTopUserName">WeCode | 위코드</span>
          </div>
          <div className="mainSideStoryWrapper">
            <p className="mainSideStoryTitle">스토리</p>
            <p className="mainSideStoryShowAll">
              <a href="#Top">모두 보기</a>
            </p>
            <img
              src="/images/seongju/main-img/friends_2.webp"
              width="45"
              height="45"
              id="storyUser1"
              className="storyUserIcon"
              alt="사이드바 친구2 사진"
            />
            <span id="storyUserName1" className="stroyUserName">
              Jiminee_star
            </span>
            <span id="storyUserTime1" className="storyUserTime">
              2시간전
            </span>
            <img
              src="/images/seongju/main-img/friends_3.webp"
              width="45"
              height="45"
              id="storyUser2"
              className="storyUserIcon"
              alt="사이드바 친구3 사진"
            />
            <span id="storyUserName2" className="stroyUserName">
              0-in_trash
            </span>
            <span id="storyUserTime2" className="storyUserTime">
              1시간전
            </span>
            <img
              src="/images/seongju/main-img/friends_4.webp"
              width="45"
              height="45"
              id="storyUser3"
              className="storyUserIcon"
              alt="사이드바 친구4 사진"
            />
            <span id="storyUserName3" className="stroyUserName">
              Mikeleral_javascript
            </span>
            <span id="storyUserTime3" className="storyUserTime">
              15분전
            </span>
          </div>
          <div className="mainSideRecommendWrapper">
            <p className="mainSideRecommendTitle">회원님을 위한 추천</p>
            <p className="mainSideRecommendShowAll">
              <a href="#Top">모두 보기</a>
            </p>
            <img
              src="/images/seongju/main-img/friends_5.webp"
              width="45"
              height="45"
              id="recommendUser1"
              className="recommendUserIcon"
              alt="추천 친구5 사진"
            />
            <a
              id="recommendUser1Name"
              className="recommendUserName"
              href="#Top"
            >
              Son_Star
            </a>
            <span id="followText1" className="recommendFollowText">
              회원님을 팔로우합니다
            </span>
            <a href="#Top" id="followFirst" className="follow">
              팔로우
            </a>
            <img
              src="/images/seongju/main-img/friends_6.webp"
              width="45"
              height="45"
              id="recommendUser2"
              className="recommendUserIcon"
              alt="추천 친구6 사진"
            />
            <a
              href="#Top"
              id="recommendUser2Name"
              className="recommendUserName"
            >
              GiSak_male
            </a>
            <span id="followText2" className="recommendFollowText">
              회원님을 팔로우합니다
            </span>
            <a href="#Top" id="followSecond" className="follow">
              팔로우
            </a>
            <img
              src="/images/seongju/main-img/friends_7.webp"
              width="45"
              height="45"
              id="recommendUser3"
              className="recommendUserIcon"
              alt="추천 친구7 사진"
            />
            <a
              href="#Top"
              id="recommendUser3Name"
              className="recommendUserName"
            >
              Robinson_France
            </a>
            <span id="followText3" className="recommendFollowText">
              회원님을 팔로우합니다
            </span>
            <a href="#Top" id="followThird" className="follow">
              팔로우
            </a>
          </div>
          <a href="#Top" className="information">
            소개.도움말.홍보 센터.API.채용 정보. 개인정보처리방침.약관.위치.인기
            계정.해시태그.언어
          </a>
        </div>
      </main>
    </Fragment>
  );
}

export default Main;
