import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-eunbyul');
  };

  return (
    <div className="Login">
      <section className="section">
        <div className="outerContainer">
          <div className="container">
            <h1 className="logo">Westagram</h1>
            <form id="inputBox">
              <input
                className="inputId"
                type="text"
                id="userId"
                name="username"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                className="inputId"
                type="password"
                id="userPassword"
                name="password"
                placeholder="비밀번호"
              />
              <button className="loginBtn" onClick={goToMain}>
                로그인
              </button>
            </form>
            <p className="loginErrorMsg hidden">
              아이디와 비밀번호를 입력해주세요.
            </p>
            <p className="lostPw">비밀번호를 잊으셨나요?</p>
          </div>
          <div className="signupBox">
            <p className="signupPara">
              계정이 없으신가요? <span className="noLinkYet">가입하기</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
