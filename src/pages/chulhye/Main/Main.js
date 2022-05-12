import React from 'react';
import './Main.scss';
import Nav from '/Users/sozzln/Desktop/33-React-Westagram-3/src/components/Nav/nav.js';
import '/Users/sozzln/Desktop/33-React-Westagram-3/src/styles/reset.scss';

function Main() {
  return (
    <div className="container">
      {/* <nav className="global-nav">
        <i className="fa-brands fa-instagram" />
        <div className="line" />
        <p className="navLogo">Westsagram</p>
        <input type="text" className="searchBar" placeholder="검색" />
        <img
          className="navImg arrow"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt="nav"
        />
        <img
          className="navImg like"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="like"
        />
        <img
          className="navImg profile"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt="profile"
        />
      </nav> */}
      <Nav />

      <div className="pageContainer">
        <div className="mainPage">
          <div className="instaId">
            <img
              className="idDetail profileImg"
              src="/images/chulhye/main-img/adrien-stachowiak-XRQRiX-tKyo-unsplash.jpg"
              alt="profile"
            />
            <p className="idDetail instaNickname">alrbnb</p>
            <i className="idDetail fa-solid fa-ellipsis" />
          </div>
          <img
            className="contentsImg"
            src="/images/chulhye/main-img/colin-meg-r-AGe5t-u-Y-unsplash.jpg"
            alt="contentsImg"
          />
          <div className="contentsBottom">
            <img
              className="bottomIcons icon1"
              src="/images/chulhye/main-img/heart.png"
              alt="contentsImg"
            />
            <img
              className="bottomIcons icon2"
              src="/images/chulhye/main-img/comment.png"
              alt="contentsImg"
            />
            <img
              className="bottomIcons icon3"
              src="/images/chulhye/main-img/share.png"
              alt="contentsImg"
            />
            <img
              className="bottomIcons icon4"
              src="/images/chulhye/main-img/shave.png"
              alt="contentsImg"
            />
          </div>
          <div className="uploadedMsg-container">
            <img
              className="uploadedMsgInfo profileImg2"
              src="/images/chulhye/main-img/adrien-stachowiak-XRQRiX-tKyo-unsplash.jpg"
              alt="profile"
            />
            <p className="uploadedMsgInfo uploadedMsg">
              <b>alrbnb</b>님 <b>외 4명</b>이 좋아합니다.
            </p>
          </div>
          <p className="uploadedReply">
            <b>alrbnb</b> 여기는 정말로다가 가고 싶게 생겼구나!
          </p>
          <div className="reply-section">
            <ul className="replyBox" />
            <div className="reply-container">
              <input
                type="text"
                className="mainReply"
                placeholder="댓글 남기기..."
              />
              <button type="submit" className="replyBtn">
                게시
              </button>
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="profileRightContainer">
            <img
              className="profileRightInfo profileRightImg"
              src="/images/chulhye/main-img/colin-meg-r-AGe5t-u-Y-unsplash.jpg"
              alt="profileimg"
            />
            <p className="profileRightInfo profileRightText">
              <b>wecode_bootcamp</b>
              <br />
              <span className="profileRightBottom">Wecode | 위코드</span>
            </p>
          </div>
          <div className="storyRightContainer">
            <div className="storyTextBox">
              <p className="storyRightText text1">스토리</p>
              <p className="storyRightText text2">모두 보기</p>
            </div>
            <div className="storyListContainer">
              <ul className="storyListSection">
                <li className="storyList list1">
                  <img
                    className="storyImg"
                    src="/images/chulhye/main-img/colin-meg-r-AGe5t-u-Y-unsplash.jpg"
                    alt="img1"
                  />
                  <p className="story-id">
                    alrbnb
                    <br />
                    <span className="time">10분 전</span>
                  </p>
                </li>
                <li className="storyList list2">
                  <img
                    className="storyImg"
                    src="/images/chulhye/main-img/colin-meg-r-AGe5t-u-Y-unsplash.jpg"
                    alt="img2"
                  />
                  <p className="story-id">
                    alrbnb
                    <br />
                    <span className="time">30분 전</span>
                  </p>
                </li>
                <li className="storyList list3">
                  <img
                    className="storyImg"
                    src="/images/chulhye/main-img/colin-meg-r-AGe5t-u-Y-unsplash.jpg"
                    alt="img3"
                  />
                  <p className="story-id">
                    alrbnb
                    <br />
                    <span className="time">1시간 전</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="recommendRightContainer">
            <div className="recommendTextBox">
              <span className="recommendRightText text1">
                회원님을 위한 추천
              </span>
              <span className="recommendRightText text2">모두 보기</span>
            </div>
            <div className="recommendListContainer">
              <ul className="recommendListSection">
                <li className="recommendList list1">
                  <img
                    className="recommendImg"
                    src="/images/chulhye/main-img/colin-meg-r-AGe5t-u-Y-unsplash.jpg"
                    alt="img1"
                  />
                  <p className="recommend-id">
                    alrbnb
                    <br />
                    <span className="recommend-friends">
                      alrbnb님 외 4명이...
                    </span>
                  </p>
                  <button type="submit" className="follow">
                    팔로우
                  </button>
                </li>
                <li className="recommendList list2">
                  <img
                    className="recommendImg"
                    src="/images/chulhye/main-img/colin-meg-r-AGe5t-u-Y-unsplash.jpg"
                    alt="img1"
                  />
                  <p className="recommend-id">
                    alrbnb
                    <br />
                    <span className="recommend-friends">
                      alrbnb님 외 5명이...
                    </span>
                  </p>
                  <button type="submit" className="follow">
                    팔로우
                  </button>
                </li>
                <li className="recommendList list3">
                  <img
                    className="recommendImg"
                    src="/images/chulhye/main-img/colin-meg-r-AGe5t-u-Y-unsplash.jpg"
                    alt="img1"
                  />
                  <p className="recommend-id">
                    alrbnb
                    <br />
                    <span className="recommend-friends">
                      alrbnb님 외 7명이...
                    </span>
                  </p>
                  <button type="submit" className="follow">
                    팔로우
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyrightRightContainer">
            <p className="copyrightText text1">
              Instagram 정보, 지원, 홍보 센터, API, 채용정보, 개인정보처리방침,
              약관, 디렉터리 프로필, 해시태그, 언어
            </p>
            <p className="copyrightText text2">@ 2019 INSTAGRAM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
