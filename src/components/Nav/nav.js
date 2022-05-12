import './nav.scss';
import React from 'react';

const Nav = () => {
  return (
    <div className="main">
      <nav className="mainNav">
        <div className="logoContainer">
          <div className="logo">
            <img alt="Westargram logo" src="images/nav/instagram.png" />
            <span>Westargram</span>
          </div>

          <div className="searchInput">
            <input type="text" placeholder="검색" />
          </div>

          <div className="icons">
            <img
              alt="nav icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              alt="nav icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              alt="nav icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
