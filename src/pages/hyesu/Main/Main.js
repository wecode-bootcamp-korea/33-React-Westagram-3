import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import { useState, useEffect, useRef } from 'react';
import Comment from './component/Comment';

function Main() {
  //목데이터 가져오기
  //fetch('api 주소',{'정보 객체'})
  //then의 res, data는 우리가 받아오는 값을 표현하는 그냥 변수
  //fetch(요청)->date를 받아옴.변환을 해줘야함. 그게 첫 번째 then
  //두 번째 then에서는 변환된 data를 변수로 가져와서 앞으로 활용을할거다~는 역할
  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET', //정보 객체 부분
    })
      .then(res => res.json()) //백엔드로부터 받아온 데이터 덩어리를 자바스크립트 객체로 바꿔줌
      .then(data => {
        setComment(data); //데이터 저장
      });
  }, []);
  const [comment, setComment] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const nextId = useRef(3); //기존 데이터에 다음 번호로  id 지정

  const onInsert = text => {
    const newComment = {
      id: nextId.current, //useRef(3)을 받아옴
      name: 'followers',
      text, //인자를 표시
    };
    if (text.length !== 0) {
      // input이 빈칸이 아니면
      setComment(comment.concat(newComment)); // 댓글 추가되는 부분을 기존 배열과 합쳐서 반환
      nextId.current += 1; //id 증가
    }
  };
  //엔터나 버튼을눌렀을 때 onInsert 실행하는 함수
  const post = e => {
    e.preventDefault();
    // let copy = [...comment];
    // copy.push(inputValue);
    // setComment(copy);
    onInsert(inputValue);
    setInputValue('');
  };

  // 2
  // 1. comment user nickname
  // comment component, props -> comment
  // comment prop Array.map => <p>user</p>
  // comment jsx
  // nickname
  // comment state string[]
  // 1. state
  // 2. nickname hardcoding

  // 2. comment post, input clear

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
                <Comment comments={comment} />
              </div>
              <ul id="toDoList">
                <li />
              </ul>

              <form id="toDoForm" onSubmit={post}>
                <input
                  onChange={e => {
                    //onChange는 input창에 글씨 쓸때 바뀌는 거
                    setInputValue(e.target.value);
                  }}
                  className="toDoInput"
                  type="text"
                  placeholder="댓글 입력..."
                  value={inputValue}
                  required
                />
                <button
                  className="inputButton"
                  // onClick={e => {
                  //   post(e);
                  // }}
                  type="submit"
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
