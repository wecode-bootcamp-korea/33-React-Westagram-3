import './Main.scss';
import Nav from '../../../components/Nav/Nav';

import { FiSend } from 'react-icons/fi';
import { FaRegHeart, FaRegComment } from 'react-icons/fa';
import { VscBookmark } from 'react-icons/vsc';

function Main() {
  return (
    <div className="main">
      <Nav />

      <main className="mainContainer">
        <section className="mainSection">
          <div className="feeds">
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
                <i className="fa-solid fa-ellipsis" />
              </div>
              <div className="feedImg" />
              <div className="feedBottom">
                <div className="iconBox">
                  <div className="iconLeft">
                    <button>
                      <FaRegHeart className="icon" />
                    </button>
                    <button>
                      <FaRegComment className="icon" />
                    </button>
                    <button>
                      <FiSend className="icon" />
                    </button>
                  </div>
                  <button className="iconRight">
                    <VscBookmark className="icon" />
                  </button>
                </div>
                <div className="likes">
                  <img src="images/haeun/main-img/user2.jpg" alt="" />
                  <span>
                    <strong>hyunsunhye</strong>님<strong> 외 10명</strong>이
                    좋아합니다
                  </span>
                </div>
                <div className="feedText">
                  <strong>nueahooy</strong>
                  <span>🍫</span>
                </div>
                <div className="commentBox">
                  <p className="commentTime">42분 전</p>
                  <ul className="commentList">
                    <li>
                      <strong>d.ddablue</strong>
                      <div className="commentText">
                        <span>우와 초콜렛이다</span>
                        <button>ⅹ</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <form className="commentInput">
                <input type="text" placeholder="댓글 달기..." />
                <button className="commentBtn" disabled>
                  게시
                </button>
              </form>
            </article>
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
              <div className="storyText">
                <span>스토리</span>
                <span>모두 보기</span>
              </div>
              <ul>
                <li className="storyList">
                  <img src="images/haeun/main-img/user2.jpg" alt="" />
                  <div className="userInfo">
                    <span>haeun_</span>
                    <span>16분 전</span>
                  </div>
                </li>
                <li className="storyList">
                  <img src="images/haeun/main-img/user2.jpg" alt="" />
                  <div className="userInfo">
                    <span>kimwon.pil</span>
                    <span>58분 전</span>
                  </div>
                </li>
                <li className="storyList">
                  <img src="images/haeun/main-img/user2.jpg" alt="" />
                  <div className="userInfo">
                    <span>52nd-day</span>
                    <span>1시간 전</span>
                  </div>
                </li>
                <li className="storyList">
                  <img src="images/haeun/main-img/user2.jpg" alt="" />
                  <div className="userInfo">
                    <span>hyunsunhye</span>
                    <span>2시간 전</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rcmndContainer">
              <div className="rcmndText">
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
              </div>
              <ul>
                <li className="rcmndList">
                  <div className="imgAndUserInfo">
                    <img src="images/haeun/main-img/user2.jpg" alt="" />
                    <div className="userInfo">
                      <strong>spring</strong>
                      <span>areyouberry님 외 2명이 ...</span>
                    </div>
                  </div>
                  <button>팔로우</button>
                </li>
                <li className="rcmndList">
                  <div className="imgAndUserInfo">
                    <img src="images/haeun/main-img/user2.jpg" alt="" />
                    <div className="userInfo">
                      <strong>summer</strong>
                      <span>areyouberry님 외 2명이 ...</span>
                    </div>
                  </div>
                  <button>팔로우</button>
                </li>
                <li className="rcmndList">
                  <div className="imgAndUserInfo">
                    <img src="images/haeun/main-img/user2.jpg" alt="" />
                    <div className="userInfo">
                      <strong>winter</strong>
                      <span>areyouberry님 외 2명이 ...</span>
                    </div>
                  </div>
                  <button>팔로우</button>
                </li>
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
