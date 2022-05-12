import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <nav className="nav-sticky">
        <div className="nav-box">
          <div className="nav-left">
            <i className="fa-brands fa-instagram" />
            <Link to="#top">
              <h1 className="logo-title">Westagram</h1>
            </Link>
          </div>
          <div className="nav-center">
            <input className="search-input" type="text" placeholder="검색" />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <div className="nav-right">
            <i className="fa-regular fa-compass" />
            <i className="fa-regular fa-heart" />
            <i className="fa-regular fa-user" />
          </div>
        </div>
      </nav>
      <main className="main-page">
        <section className="feeds">
          <div className="story">
            <div className="flex-div ind-story1">
              <div className="border">
                <img
                  className="story-img"
                  src="/images/eunbyul/main-img/brooke_7.jpg"
                  alt="brooke_7 user profile"
                />
              </div>
              <p className="feeds-para">brooke_7</p>
            </div>
            <div className="flex-div ind-story2">
              <div className="border">
                <img
                  className="story-img"
                  src="/images/eunbyul/main-img/chrisferrer.jpg"
                  alt="chirsaferrer user profile"
                />
              </div>
              <p className="feeds-para">chrisaferrer</p>
            </div>
            <div className="flex-div ind-story3">
              <div className="border">
                <img
                  className="story-img"
                  src="/images/eunbyul/main-img/david00.jpg"
                  alt="davi00 user profile"
                />
              </div>
              <p className="feeds-para">davi00</p>
            </div>
            <div className="flex-div ind-story4">
              <div className="border">
                <img
                  className="story-img"
                  src="/images/eunbyul/main-img/drewcolins.jpg"
                  alt="rosacolins user profile"
                />
              </div>
              <p className="feeds-para">rosacolins</p>
            </div>
            <div className="flex-div ind-story5">
              <div className="border">
                <img
                  className="story-img"
                  src="/images/eunbyul/main-img/ivanacajina.jpg"
                  alt="ivancajina user profile"
                />
              </div>
              <p className="feeds-para">ivancajina</p>
            </div>
            <div className="flex-div ind-story6">
              <div className="border">
                <img
                  className="story-img"
                  src="/images/eunbyul/main-img/joelmuniz.jpg"
                  alt="joelmuniz user profile"
                />
              </div>
              <p className="feeds-para">joelmuniz</p>
            </div>
            <div className="flex-div ind-story7">
              <div className="border">
                <img
                  className="story-img"
                  src="/images/eunbyul/main-img/michaeldam.jpg"
                  alt="smileyzsh user profile"
                />
              </div>
              <p className="feeds-para">smileysh</p>
            </div>
            <div className="flex-div ind-story8">
              <div className="border">
                <img
                  className="story-img"
                  src="/images/eunbyul/main-img/pavyNY.jpg"
                  alt="pavyNY user profile"
                />
              </div>
              <p className="feeds-para">pavyNY</p>
            </div>
            <div className="flex-div ind-story9">
              <div className="border">
                <img
                  className="story-img"
                  src="/images/eunbyul/main-img/rayulm6.jpg"
                  alt="rayulm6 user profile"
                />
              </div>
              <p className="feeds-para">rayulm6</p>
            </div>
            <div className="flex-div ind-story10">
              <div className="border">
                <img
                  className="story-img"
                  src="/images/eunbyul/main-img/sikkema.jpg"
                  alt="sikkema user profile"
                />
              </div>
              <p className="feeds-para">sikkema</p>
            </div>
          </div>
          <article>
            <div className="post-head">
              <div className="post-profile">
                <img
                  className="profile-img"
                  src="/images/eunbyul/main-img/byule.jpg"
                  alt="main profile"
                />
                <h3 className="profile-id">byul____e</h3>
              </div>
              <i className="fa-solid fa-ellipsis" />
            </div>
            <img
              className="article-img"
              src="/images/eunbyul/main-img/post-img.jpg"
              alt="user post of the day"
            />
            <div className="post-icons">
              <div className="float-left">
                <img
                  className="icon-left"
                  src="/images/eunbyul/main-img/heart.png"
                  alt="heart icon"
                />
                <img
                  className="icon-left"
                  src="/images/eunbyul/main-img/comment.png"
                  alt="comment icon"
                />
                <img
                  className="icon-left"
                  src="/images/eunbyul/main-img/share.png"
                  alt="share icon"
                />
              </div>
              <img
                className="icon-flex"
                src="/images/eunbyul/main-img/shave.png"
                alt="bookmark icon"
              />
            </div>
            <div className="likes">
              <img
                className="likes-img"
                src="/images/eunbyul/main-img/ssenseachi.jpg"
                alt="ssenseachi user profile"
              />
              <p className="likes-para">
                <strong>ssensea.chi</strong>님 외 <strong>4</strong>명이
                좋아합니다
              </p>
            </div>
            <div className="description">
              <p className="desc-para">
                <strong className="id">byul____e</strong> "울창한 서울숲 안,
                지나치기 쉬운 작은 연못과 예쁜 다리가 있는 곳." - 서울숲
                컨서번시
              </p>
              <p className="desc-para">
                <span className="minutes">54</span>분 전
              </p>
              <ul id="comment-list" />
            </div>
            <form className="comment">
              <input
                className="comment-input"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="comment-btn" type="submit">
                게시
              </button>
            </form>
          </article>
        </section>
        <aside className="aside">
          <div className="profile">
            <img
              className="profile-img"
              src="/images/eunbyul/main-img/byule.jpg"
              alt="user profile"
            />
            <div>
              <h3 className="profile-id">byule____e</h3>
              <p className="profile-name">Eun Byul Cheon</p>
            </div>
          </div>
          <div className="follow-recommendation">
            <div className="aside-title">
              <p className="aside-para">회원님을 위한 추천</p>
              <button className="aside-btn">모두 보기</button>
            </div>
            <div className="people">
              <div className="person">
                <img
                  className="person-img"
                  src="/images/eunbyul/main-img/azbelricse.jpg"
                  alt="azbelricse user profile"
                />
                <div className="id-recommendation">
                  <h4 className="recom-id">azbelricse</h4>
                  <p className="recom-para">회원님을 팔로우합니다</p>
                </div>
                <button className="person-btn">팔로우</button>
              </div>
              <div className="person">
                <img
                  className="person-img"
                  src="/images/eunbyul/main-img/eveych.jpg"
                  alt="eveych user profile"
                />
                <div className="id-recommendation">
                  <h4 className="recom-id">eveych</h4>
                  <p className="recom-para">회원님을 팔로우합니다</p>
                </div>
                <button className="person-btn">팔로우</button>
              </div>
              <div className="person">
                <img
                  className="person-img"
                  src="/images/eunbyul/main-img/michellecalderon.jpg"
                  alt="michellecalderon user profile"
                />
                <div className="id-recommendation">
                  <h4 className="recom-id">michelle_calderon</h4>
                  <p className="recom-para">회원님을 팔로우합니다</p>
                </div>
                <button className="person-btn">팔로우</button>
              </div>
              <div className="person">
                <img
                  className="person-img"
                  src="/images/eunbyul/main-img/monetime.jpg"
                  alt="monetime user profile"
                />
                <div className="id-recommendation">
                  <h4 className="recom-id">andreayou1014</h4>
                  <p className="recom-para">회원님을 팔로우합니다</p>
                </div>
                <button className="person-btn">팔로우</button>
              </div>
              <div className="person">
                <img
                  className="person-img"
                  src="/images/eunbyul/main-img/sandraespinoza.jpg"
                  alt="sandraespinoza user profile"
                />
                <div className="id-recommendation">
                  <h4 className="recom-id">sandraespinoza_cu</h4>
                  <p className="recom-para">회원님을 팔로우합니다</p>
                </div>
                <button className="person-btn">팔로우</button>
              </div>
            </div>
          </div>
        </aside>
        <footer className="footer">
          <p className="footer-para">
            Instagram 정보 · 지원 · 홍보 센터 · API ·<br />
            채용 정보 · 개인정보처리방침 · 약관 ·<br />
            디렉터리 · 프로필 · 해시태그 · 언어
          </p>
          <br />
          <p>© 2021 INSTAGRAM</p>
        </footer>
      </main>
    </div>
  );
};

export default Main;
