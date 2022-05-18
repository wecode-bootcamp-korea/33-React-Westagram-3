import React, { useState, useEffect } from 'react';

import Nav from '../../../components/Nav/Nav';
// import Comment from './Comment/Comment';
import Story from './Story/Story';
import Recommendation from './Recommendation/Recommendation';
import Feed from './Feed/Feed';

import './Main.scss';

function Main() {
  const [storyList, setStoryList] = useState([]);
  const [recommendationList, setRecommendationList] = useState([]);
  const [feedList, setFeedList] = useState([]);

  const fetchStoryData = () => {
    fetch('/data/haeunStoryData.json')
      .then(res => res.json())
      .then(data => {
        setStoryList(data);
      });
  };

  const fetchRcmndData = () => {
    fetch('/data/haeunRcmndData.json')
      .then(res => res.json())
      .then(data => {
        setRecommendationList(data);
      });
  };

  const fetchFeedData = () => {
    fetch('/data/feed.json')
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  };

  useEffect(() => {
    fetchStoryData();
    fetchRcmndData();
    fetchFeedData();
  }, []);

  return (
    <div className="main">
      <Nav />

      <main className="mainContainer">
        <section className="mainSection">
          <div className="feeds">
            {feedList.map(FeedItem => {
              return <Feed key={FeedItem.id} feedItem={FeedItem} />;
            })}
          </div>

          <aside className="mainRight">
            <div className="userContainer">
              <img src="images/haeun/main-img/user1.jpg" alt="" />
              <div className="userIdContainer">
                <span>nueahooy</span>
                <span>Wecode | 위코드</span>
              </div>
            </div>

            <div className="storyContainer">
              <div className="storyHeader">
                <span>스토리</span>
                <span>모두 보기</span>
              </div>
              <ul>
                {storyList.map(storyItem => {
                  return <Story key={storyItem.id} story={storyItem} />;
                })}
              </ul>
            </div>

            <div className="rcmndContainer">
              <div className="rcmdHeader">
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
              </div>
              <ul>
                {recommendationList.map(recommendationItem => {
                  return (
                    <Recommendation
                      key={recommendationItem.id}
                      recommendationItem={recommendationItem}
                    />
                  );
                })}
              </ul>
            </div>

            <footer>
              <span>
                소개도움말홍보 센터API채용 정보개인정보처리방침약관위치인기
                계정해시태그언어
              </span>
              <p>© 2022 INSTAGRAM FROM META</p>
            </footer>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default Main;
