import './Main.scss';
import Nav from '../../../components/Nav/Nav';
function Main() {
  return (
    <div className="main_contents">
      <Nav />
      <main>
        <div className="main-left">
          <div className="main-header">
            <img src="/images/hyesukim/main-img/최우식.jpg" alt="최우식" />
            <span className="story-id">dntlrdl</span>
          </div>
          <div className="main-content">
            <div className="main-content-header">
              <div className="main-content-profile">
                <img
                  src="/images/hyesukim/main-img/애기_멍멍.jpg"
                  alt="애기_멍멍"
                />
                <span className="my-id">
                  <b />
                  kimaesu
                  <b />
                </span>
              </div>
              <div className="dots">•••</div>
            </div>
            <div className="main-content-photo">
              <img
                src="/images/hyesukim/main-img/애기_멍멍.jpg"
                alt="애기_멍멍"
              />
            </div>

            <div className="main-content-header">
              <div className="main-content-like-area">
                <img
                  className="heart2"
                  src="images/hyesukim/main-img/heart2.png"
                  alt="heart2"
                />
                <img
                  className="comment"
                  src="images/hyesukim/main-img/comment.png"
                  alt="comment"
                />
                <img
                  className="share"
                  src="images/hyesukim/main-img/share.png"
                  alt="share"
                />
              </div>

              <img
                className="shave"
                src="images/hyesukim/main-img/shave.png"
                alt="shave"
              />
            </div>
            <div className="post_comment_wrap">
              <div className="commentList">
                <span>
                  <b>kimaesu</b> 애기 할아버지 착한 얼굴에 그렇지 못한 태도❤️
                  그래도 귀여우니까 괜찮음🧡
                </span>
                <div className="user_desc">
                  <b>follower1</b>
                  <span>존귀탱</span>
                </div>
                <div className="user_desc">
                  <b>follower2</b>
                  <span>넘나 귀여운것</span>
                </div>
              </div>
              <ul id="todo-list">
                <li />
              </ul>

              <form id="todo-form">
                <input
                  className="todoInput"
                  type="text"
                  placeholder="Write a To do and Press Enter"
                  required
                />
              </form>
            </div>
          </div>
        </div>
      </main>

      <div className="main-right">
        <div className="main-right-content-1">
          <div className="main-right-content-2">
            <div className="main-right-profile-2">
              <img src="/images/hyesukim/main-img/최우식.jpg" alt="최우식" />
              <div className="main-right-id-2">
                <b>chldntlr</b>
              </div>
            </div>
            <div className="main-right-change-2">
              <b>팔로우</b>
            </div>
          </div>
          <div className="main-right-content-3">
            <div className="main-right-profile-3">
              <img src="/images/hyesukim/main-img/최우식.jpg" alt="최우식" />
              <div className="main-right-id-3">
                <b>chldntlr</b>
              </div>
            </div>
            <div className="main-right-change-3">
              <b>팔로우</b>
            </div>
          </div>
          <div className="main-right-bottom-area">
            <div className="main-rignt-bottom-textbox">
              <span>
                소개 · 도움말 · 홍보 센터 · API · 채용 정보 ·<br />
              </span>
              <span>
                개인정보처리방침 · 약관 · 위치 · 인기 계정 ·
                <p>해시태그 · 언어</p>
              </span>
              <br />
              <span>@ 2022 INSTAGRAM FROM META</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
