import React, { Fragment } from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/nav';
import Feeds from './Feeds';
import { useState, useEffect } from 'react';

function Main() {
  let [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json')
      .then(res => res.json())
      .then(data => setFeed(data));
  }, []);

  return (
    <Fragment>
      <Nav />
      <main>
        {feed.map(f => (
          <Feeds
            key={f.id}
            profileSrc={f.profileSrc}
            prdfileId={f.prdfileId}
            imgSrc={f.imgSrc}
            feedScript={f.feedScript}
          />
        ))}

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
