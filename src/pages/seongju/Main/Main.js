import React, { Fragment } from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/nav';

function Main() {
  return (
    <Fragment>
      <Nav />
      <main>
        <div className="feeds">
          <article>
            <div className="feeds_top">
              <img
                src="/images/seongju/main-img/myphoto.webp"
                width="53"
                height="53"
                className="feeds_top_user_icon"
                alt="내 사진"
              />
              <span className="feeds_top_user_id">
                <b>wecode_bootcamp</b>
              </span>
              <span className="feeds_top_user_name">WeCode - 위코드</span>
              <button
                id="feeds_top_update_button"
                class="fa-solid fa-ellipsis"
              ></button>
            </div>
            <img
              src="/images/seongju/main-img/myphoto.webp"
              width="100%"
              height="620"
              className="feeds_user_image"
              alt="내 사진"
            />
            <div className="feeds_middle">
              <div className="feeds_middle_icon">
                <a href="#Top" className="feeds_middle_icon_heart">
                  <img
                    src="/images/seongju/main-img/heart.png"
                    width="35"
                    height="35"
                    alt="피드 하트 아이콘"
                  />
                </a>
                <a href="#" className="feeds_middle_icon_comment">
                  <img
                    src="/images/seongju/main-img/comment.png"
                    width="35"
                    height="35"
                    alt="피드 댓글 아이콘"
                  />
                </a>
                <a href="#" className="feeds_middle_icon_share">
                  <img
                    src="/images/seongju/main-img/share.png"
                    width="35"
                    height="35"
                    alt="피드 공유 아이콘"
                  />
                </a>
              </div>
              <div>
                <a href="#" className="feeds_middle_icon_save">
                  <img
                    src="/images/seongju/main-img/shave.png"
                    width="35"
                    height="35"
                    alt="피드 저장 아이콘"
                  />
                </a>
              </div>
            </div>
            <div className="feeds_like_wrapper">
              <img
                src="/images/seongju/main-img/friends_1.webp"
                width="50"
                height="50"
                className="friends_one"
                alt="피드 친구 사진"
              />
              <p className="feeds_how_many_likes">
                <b>AhnSeoung_Ju</b>님 <b>외 4명</b>이 좋아합니다.
              </p>
            </div>
            <section className="feeds_comment_wrapper">
              <input
                type="text"
                className="feeds_comment_input"
                placeholder="&#128512; 댓글 달기..."
              />
              <button className="feeds_comment_button">게시</button>
            </section>
          </article>
        </div>
        <div className="main_side">
          <div className="main_side_top">
            <img
              src="/images/seongju/main-img/myphoto.webp"
              width="57"
              height="57"
              className="side_top_user_icon"
              alt="사이드바 내 사진"
            />
            <span className="side_top_user_id">
              <b>wecode_bootcamp</b>
            </span>
            <span className="side_top_user_name">WeCode | 위코드</span>
          </div>
          <div className="main_side_story_wrapper">
            <p className="main_side_story_title">스토리</p>
            <p className="main_side_story_showAll">
              <a href="#">모두 보기</a>
            </p>
            <img
              src="/images/seongju/main-img/friends_2.webp"
              width="45"
              height="45"
              id="story_user1"
              className="story_user_icon"
              alt="사이드바 친구2 사진"
            />
            <span id="story_user_name1" className="stroy_user_name">
              Jiminee_star
            </span>
            <span id="story_user_time1" className="story_user_time">
              2시간전
            </span>
            <img
              src="/images/seongju/main-img/friends_3.webp"
              width="45"
              height="45"
              id="story_user2"
              className="story_user_icon"
              alt="사이드바 친구3 사진"
            />
            <span id="story_user_name2" className="stroy_user_name">
              0-in_trash
            </span>
            <span id="story_user_time2" className="story_user_time">
              1시간전
            </span>
            <img
              src="/images/seongju/main-img/friends_4.webp"
              width="45"
              height="45"
              id="story_user3"
              className="story_user_icon"
              alt="사이드바 친구4 사진"
            />
            <span id="story_user_name3" className="stroy_user_name">
              Mikeleral_javascript
            </span>
            <span id="story_user_time3" className="story_user_time">
              15분전
            </span>
          </div>
          <div className="main_side_recommend_wrapper">
            <p className="main_side_recommend_title">회원님을 위한 추천</p>
            <p className="main_side_recommend_showAll">
              <a href="#">모두 보기</a>
            </p>
            <img
              src="/images/seongju/main-img/friends_5.webp"
              width="45"
              height="45"
              id="recommend_user1"
              className="recommend_user_icon"
              alt="추천 친구5 사진"
            />
            <a
              id="recommend_user1_name"
              className="recommend_user_name"
              href="#"
            >
              Son_Star
            </a>
            <span id="follow_text1" className="recommend_follow_text">
              회원님을 팔로우합니다
            </span>
            <a href="#" id="follow_1" className="follow">
              팔로우
            </a>
            <img
              src="/images/seongju/main-img/friends_6.webp"
              width="45"
              height="45"
              id="recommend_user2"
              className="recommend_user_icon"
              alt="추천 친구6 사진"
            />
            <a
              href="#"
              id="recommend_user2_name"
              className="recommend_user_name"
            >
              GiSak_male
            </a>
            <span id="follow_text2" className="recommend_follow_text">
              회원님을 팔로우합니다
            </span>
            <a href="#" id="follow_2" className="follow">
              팔로우
            </a>
            <img
              src="/images/seongju/main-img/friends_7.webp"
              width="45"
              height="45"
              id="recommend_user3"
              className="recommend_user_icon"
              alt="추천 친구7 사진"
            />
            <a
              href="#"
              id="recommend_user3_name"
              className="recommend_user_name"
            >
              Robinson_France
            </a>
            <span id="follow_text3" className="recommend_follow_text">
              회원님을 팔로우합니다
            </span>
            <a href="#" id="follow_3" className="follow">
              팔로우
            </a>
          </div>
          <a href="#" className="information">
            소개.도움말.홍보 센터.API.채용 정보. 개인정보처리방침.약관.위치.인기
            계정.해시태그.언어
          </a>
        </div>
      </main>
    </Fragment>
  );
}

export default Main;
