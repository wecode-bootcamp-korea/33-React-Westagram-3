import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import Comment from './Comment';

const Main = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Mock Data 가져오기
  useEffect(() => {
    fetch('data/eunbyulData.json')
      .then(response => response.json()) //response.json(): 백앤드로부터 받아오는 데이터; 자바스크립트를 객체로 바꿔준다.
      .then(json => setComments(json));
  }, []);

  const handleComment = event => setComment(event.target.value);
  const submitComment = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setComments(currentArray => [...currentArray, comment]);
    setComment('');
  };

  return (
    <div className="Main">
      <nav className="navFixed">
        <div className="navBox">
          <div className="navLeft">
            <i className="fa-brands fa-instagram" />
            <Link to="#top">
              <h1 className="logoTitle">Westagram</h1>
            </Link>
          </div>
          <div className="navCenter">
            <input className="searchInput" type="text" placeholder="검색" />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <div className="navRight">
            <i className="fa-regular fa-compass" />
            <i className="fa-regular fa-heart" />
            <i className="fa-regular fa-user" />
          </div>
        </div>
      </nav>
      <main className="mainPage">
        <section className="feeds">
          <div className="story">
            <div className="flexDiv indStory1">
              <div className="border">
                <img
                  className="storyImg"
                  src="/images/eunbyul/main-img/brooke_7.jpg"
                  alt="brooke_7 user profile"
                />
              </div>
              <p className="feedsPara">brooke_7</p>
            </div>
            <div className="flexDiv">
              <div className="border">
                <img
                  className="storyImg"
                  src="/images/eunbyul/main-img/chrisferrer.jpg"
                  alt="chirsaferrer user profile"
                />
              </div>
              <p className="feedsPara">chrisaferrer</p>
            </div>
            <div className="flexDiv">
              <div className="border">
                <img
                  className="storyImg"
                  src="/images/eunbyul/main-img/david00.jpg"
                  alt="davi00 user profile"
                />
              </div>
              <p className="feedsPara">davi00</p>
            </div>
            <div className="flexDiv">
              <div className="border">
                <img
                  className="storyImg"
                  src="/images/eunbyul/main-img/drewcolins.jpg"
                  alt="rosacolins user profile"
                />
              </div>
              <p className="feedsPara">rosacolins</p>
            </div>
            <div className="flexDiv">
              <div className="border">
                <img
                  className="storyImg"
                  src="/images/eunbyul/main-img/ivanacajina.jpg"
                  alt="ivancajina user profile"
                />
              </div>
              <p className="feedsPara">ivancajina</p>
            </div>
            <div className="flexDiv">
              <div className="border">
                <img
                  className="storyImg"
                  src="/images/eunbyul/main-img/joelmuniz.jpg"
                  alt="joelmuniz user profile"
                />
              </div>
              <p className="feedsPara">joelmuniz</p>
            </div>
            <div className="flexDiv">
              <div className="border">
                <img
                  className="storyImg"
                  src="/images/eunbyul/main-img/michaeldam.jpg"
                  alt="smileyzsh user profile"
                />
              </div>
              <p className="feedsPara">smileysh</p>
            </div>
            <div className="flexDiv">
              <div className="border">
                <img
                  className="storyImg"
                  src="/images/eunbyul/main-img/pavyNY.jpg"
                  alt="pavyNY user profile"
                />
              </div>
              <p className="feedsPara">pavyNY</p>
            </div>
            <div className="flexDiv">
              <div className="border">
                <img
                  className="storyImg"
                  src="/images/eunbyul/main-img/rayulm6.jpg"
                  alt="rayulm6 user profile"
                />
              </div>
              <p className="feedsPara">rayulm6</p>
            </div>
            <div className="flexDiv">
              <div className="border">
                <img
                  className="storyImg"
                  src="/images/eunbyul/main-img/sikkema.jpg"
                  alt="sikkema user profile"
                />
              </div>
              <p className="feedsPara">sikkema</p>
            </div>
          </div>
          <article>
            <div className="postHead">
              <div className="postProfile">
                <img
                  className="profileImg"
                  src="/images/eunbyul/main-img/byule.jpg"
                  alt="main profile"
                />
                <h3 className="profileId">byul____e</h3>
              </div>
              <i className="faSolid faEllipsis" />
            </div>
            <img
              className="articleImg"
              src="/images/eunbyul/main-img/post-img.jpg"
              alt="user post of the day"
            />
            <div className="postIcons">
              <div className="floatLeft">
                <img
                  className="iconLeft"
                  src="/images/eunbyul/main-img/heart.png"
                  alt="heart icon"
                />
                <img
                  className="iconLeft"
                  src="/images/eunbyul/main-img/comment.png"
                  alt="comment icon"
                />
                <img
                  className="iconLeft"
                  src="/images/eunbyul/main-img/share.png"
                  alt="share icon"
                />
              </div>
              <img
                className="iconFlex"
                src="/images/eunbyul/main-img/shave.png"
                alt="bookmark icon"
              />
            </div>
            <div className="likes">
              <img
                className="likesImg"
                src="/images/eunbyul/main-img/ssenseachi.jpg"
                alt="ssenseachi user profile"
              />
              <p className="likesPara">
                <strong>ssensea.chi</strong>님 외 <strong>4</strong>명이
                좋아합니다
              </p>
            </div>
            <div className="description">
              <p className="descPara">
                <strong className="id">byul____e</strong> "울창한 서울숲 안,
                지나치기 쉬운 작은 연못과 예쁜 다리가 있는 곳." - 서울숲
                컨서번시
              </p>
              <p className="descPara">
                <span className="minutes">54</span>분 전
              </p>
              <ul id="commentList">
                {comments.map(list => {
                  return (
                    <Comment
                      key={list.id}
                      name={list.userName}
                      text={list.text}
                    />
                  );
                })}
                {/* {comments.map((item, index) => (
                  <Comment
                    item={item}
                    key={comment.id}
                    value={comment}
                    comments={comments}
                    index={index}
                  />
                ))} */}
              </ul>
            </div>
            <form onSubmit={submitComment} className="comment">
              <input
                onChange={handleComment}
                value={comment}
                className="commentInput"
                type="text"
                placeholder="댓글 달기..."
              />
              <button
                className="commentBtn"
                type="submit"
                disabled={comment.length > 1 ? false : true}
              >
                게시
              </button>
            </form>
          </article>
        </section>
        <aside className="aside">
          <div className="profile">
            <img
              className="profileImg"
              src="/images/eunbyul/main-img/byule.jpg"
              alt="user profile"
            />
            <div>
              <h3 className="profileId">byule____e</h3>
              <p className="profileName">Eun Byul Cheon</p>
            </div>
          </div>
          <div className="followRecommendation">
            <div className="asideTitle">
              <p className="asidePara">회원님을 위한 추천</p>
              <button className="asideBtn">모두 보기</button>
            </div>
            <div className="people">
              <div className="person">
                <img
                  className="personImg"
                  src="/images/eunbyul/main-img/azbelricse.jpg"
                  alt="azbelricse user profile"
                />
                <div className="idRecommendation">
                  <h4 className="recomId">azbelricse</h4>
                  <p className="recomPara">회원님을 팔로우합니다</p>
                </div>
                <button className="personBtn">팔로우</button>
              </div>
              <div className="person">
                <img
                  className="personImg"
                  src="/images/eunbyul/main-img/eveych.jpg"
                  alt="eveych user profile"
                />
                <div className="idRecommendation">
                  <h4 className="recomId">eveych</h4>
                  <p className="recomPara">회원님을 팔로우합니다</p>
                </div>
                <button className="personBtn">팔로우</button>
              </div>
              <div className="person">
                <img
                  className="personImg"
                  src="/images/eunbyul/main-img/michellecalderon.jpg"
                  alt="michellecalderon user profile"
                />
                <div className="idRecommendation">
                  <h4 className="recomId">michelle_calderon</h4>
                  <p className="recomPara">회원님을 팔로우합니다</p>
                </div>
                <button className="personBtn">팔로우</button>
              </div>
              <div className="person">
                <img
                  className="personImg"
                  src="/images/eunbyul/main-img/monetime.jpg"
                  alt="monetime user profile"
                />
                <div className="idRecommendation">
                  <h4 className="recomId">andreayou1014</h4>
                  <p className="recomPara">회원님을 팔로우합니다</p>
                </div>
                <button className="personBtn">팔로우</button>
              </div>
              <div className="person">
                <img
                  className="personImg"
                  src="/images/eunbyul/main-img/sandraespinoza.jpg"
                  alt="sandraespinoza user profile"
                />
                <div className="idRecommendation">
                  <h4 className="recomId">sandraespinoza_cu</h4>
                  <p className="recomPara">회원님을 팔로우합니다</p>
                </div>
                <button className="personBtn">팔로우</button>
              </div>
            </div>
          </div>
        </aside>
        <footer className="footer">
          <p className="footerPara">
            Instagram 정보 · 지원 · 홍보 센터 · API ·<br />
            채용 정보 · 개인정보처리방침 · 약관 ·<br />
            디렉터리 · 프로필 · 해시태그 · 언어
          </p>
          <br />
          <p className="footerPara">© 2021 INSTAGRAM</p>
        </footer>
      </main>
    </div>
  );
};

export default Main;
