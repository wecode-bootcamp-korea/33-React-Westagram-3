import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import { Component, useState } from 'react';
import Comment from './component/Comment';
function Main() {
  const [comment, setComment] = useState(['']); //댓글 입력부분(배열)
  const [inputValue, setInputValue] = useState(''); //입력한댓글

  const post = e => {
    e.preventDefault();
    let copy = [...comment];
    copy.push(inputValue);
    setComment(copy);
  };

  return (
    <div className="mainContents">
      <Nav />
      <main>
        <div className="mainLeft">
          <div className="mainHeader">
            <img src="/images/hyesukim/main-img/최우식.jpg" alt="최우식" />
            <span className="storyId">dntlrdl</span>
          </div>
          <div className="mainContent">
            <div className="mainContentHeader">
              <div className="mainContentProfile">
                <img
                  src="/images/hyesukim/main-img/애기_멍멍.jpg"
                  alt="애기_멍멍"
                />
                <span className="myId">
                  <b />
                  kimaesu
                  <b />
                </span>
              </div>
              <div className="dots">•••</div>
            </div>
            <div className="mainContentPhoto">
              <img
                src="/images/hyesukim/main-img/애기_멍멍.jpg"
                alt="애기_멍멍"
              />
            </div>

            <div className="mainContentHeader">
              <div className="mainContentLikeArea">
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
            <div className="postCommentWrap">
              <div className="commentList">
                <span>
                  <b>kimaesu</b> 애기 할아버지 착한 얼굴에 그렇지 못한 태도❤️
                  그래도 귀여우니까 괜찮음🧡
                </span>
                <div className="userDesc">
                  <b>follower1</b>
                  <span>존귀탱</span>
                </div>
                <div className="userDesc">
                  <b>follower2</b>
                  <span>넘나 귀여운것</span>
                </div>
                <span />
                <Comment comment={comment} />
              </div>
              <ul id="toDoList">
                <li />
              </ul>

              <form id="toDoForm">
                <input
                  onChange={e => {
                    setInputValue(e.target.value);
                  }}
                  className="toDoInput"
                  type="text"
                  placeholder="댓글 입력..."
                  required
                />
                <button
                  className="inputButton"
                  onClick={e => {
                    post(e);
                  }}
                >
                  게시
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <div className="mainRight">
        <div className="mainRightContent1">
          <div className="mainRightContent2">
            <div className="mainRightProfile2">
              <img src="/images/hyesukim/main-img/최우식.jpg" alt="최우식" />
              <div className="mainRightId2">
                <b>chldntlr</b>
              </div>
            </div>
            <div className="mainRightChange2">
              <b>팔로우</b>
            </div>
          </div>
          <div className="mainRightContent3">
            <div className="mainRightProfile3">
              <img src="/images/hyesukim/main-img/최우식.jpg" alt="최우식" />
              <div className="mainRightId3">
                <b>chldntlr</b>
              </div>
            </div>
            <div className="mainRightChange3">
              <b>팔로우</b>
            </div>
          </div>
          <div className="mainRightBottomArea">
            <div className="mainRightBottomTextBox">
              <span>
                소개 · 도움말 · 홍보 센터 · API · 채용 정보 ·<br />
              </span>
              <span>개인정보처리방침 · 약관 · 위치 · 인기 계정 ·</span>
              <br />
              <span>해시태그 ·언어</span>
              <br />
              <br />
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
